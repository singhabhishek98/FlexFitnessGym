import { getStore } from '@netlify/blobs'

const CACHE_VERSION = 1
const STORE_NAME = 'festival-calendar'
const CACHE_PREFIX = `india-v${CACHE_VERSION}`
const LOCK_MAX_AGE_MS = 30 * 1000
const CACHE_WAIT_ATTEMPTS = 20
const CACHE_WAIT_MS = 250

const FESTIVAL_MATCHERS = [
  { slug: 'new-year', pattern: /^new year(?:'s)?(?: day)?$/i },
  { slug: 'republic-day', pattern: /\brepublic day\b/i },
  { slug: 'holi', pattern: /\bholi\b/i },
  { slug: 'independence-day', pattern: /\bindependence day\b/i },
  { slug: 'raksha-bandhan', pattern: /\b(?:raksha bandhan|rakhi)\b/i },
  { slug: 'janmashtami', pattern: /\b(?:janmashtami|krishna jayanti)\b/i },
  { slug: 'diwali', pattern: /\b(?:diwali|deepavali)\b/i },
  { slug: 'christmas', pattern: /^christmas(?: day)?$/i },
]

const jsonResponse = (data, status = 200, cacheable = false) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': cacheable ? 'public, max-age=3600' : 'no-store',
    ...(cacheable ? { 'netlify-cdn-cache-control': 'public, durable, max-age=31536000' } : {}),
  },
})

const sleep = (duration) => new Promise((resolve) => setTimeout(resolve, duration))

const getIndiaYear = () => Number(new Intl.DateTimeFormat('en', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
}).format(new Date()))

export const mapCalendarificHolidays = (holidays, year) => {
  const matches = []
  const seen = new Set()

  for (const holiday of holidays) {
    const name = typeof holiday?.name === 'string' ? holiday.name.trim() : ''
    const normalizedName = name.replace(/[’‘]/g, "'")
    const date = typeof holiday?.date?.iso === 'string' ? holiday.date.iso.slice(0, 10) : ''
    const festival = FESTIVAL_MATCHERS.find(({ pattern }) => pattern.test(normalizedName))

    if (!festival || !date.startsWith(`${year}-`)) {
      continue
    }

    const entryKey = `${festival.slug}:${date}`

    if (seen.has(entryKey)) {
      continue
    }

    seen.add(entryKey)
    matches.push({ slug: festival.slug, date, apiName: name })
  }

  return matches.sort((first, second) => first.date.localeCompare(second.date))
}

const fetchCalendarificYear = async (year, apiKey) => {
  const endpoint = new URL('https://calendarific.com/api/v2/holidays')
  endpoint.searchParams.set('api_key', apiKey)
  endpoint.searchParams.set('country', 'IN')
  endpoint.searchParams.set('year', String(year))

  const response = await fetch(endpoint, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(10_000),
  })

  if (!response.ok) {
    throw new Error(`Calendarific request failed with status ${response.status}`)
  }

  const payload = await response.json()

  if (payload?.meta?.code !== 200 || !Array.isArray(payload?.response?.holidays)) {
    throw new Error('Calendarific returned an invalid holiday response')
  }

  return mapCalendarificHolidays(payload.response.holidays, year)
}

const readCachedYear = (store, cacheKey) => store.get(cacheKey, {
  consistency: 'strong',
  type: 'json',
})

const waitForCachedYear = async (store, cacheKey) => {
  for (let attempt = 0; attempt < CACHE_WAIT_ATTEMPTS; attempt += 1) {
    await sleep(CACHE_WAIT_MS)
    const cached = await readCachedYear(store, cacheKey)

    if (cached) {
      return cached
    }
  }

  return null
}

const acquireYearLock = async (store, lockKey) => {
  const existingLock = await store.get(lockKey, { consistency: 'strong', type: 'json' })

  if (existingLock && Date.now() - Number(existingLock.createdAt) < LOCK_MAX_AGE_MS) {
    return false
  }

  if (existingLock) {
    await store.delete(lockKey)
  }

  const result = await store.setJSON(lockKey, { createdAt: Date.now() }, { onlyIfNew: true })
  return result.modified
}

export default async (request) => {
  if (request.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  const requestedYear = Number(new URL(request.url).searchParams.get('year') ?? getIndiaYear())

  if (!Number.isInteger(requestedYear) || requestedYear < 2024 || requestedYear > 2049) {
    return jsonResponse({ error: 'Year must be between 2024 and 2049' }, 400)
  }

  const store = getStore({ name: STORE_NAME, consistency: 'strong' })
  const cacheKey = `${CACHE_PREFIX}/${requestedYear}.json`
  const lockKey = `${CACHE_PREFIX}/locks/${requestedYear}.json`

  try {
    const cached = await readCachedYear(store, cacheKey)

    if (cached) {
      return jsonResponse({ ...cached, cache: 'hit' }, 200, true)
    }

    const apiKey = process.env.CALENDARIFIC_API_KEY

    if (!apiKey) {
      return jsonResponse({
        error: 'Festival calendar API is not configured',
        code: 'CALENDARIFIC_KEY_MISSING',
      }, 503)
    }

    const ownsLock = await acquireYearLock(store, lockKey)

    if (!ownsLock) {
      const warmedCache = await waitForCachedYear(store, cacheKey)

      if (warmedCache) {
        return jsonResponse({ ...warmedCache, cache: 'hit' }, 200, true)
      }

      return jsonResponse({ error: 'Festival calendar cache is warming. Please retry.' }, 503)
    }

    try {
      const festivals = await fetchCalendarificYear(requestedYear, apiKey)
      const calendar = {
        version: CACHE_VERSION,
        country: 'IN',
        year: requestedYear,
        festivals,
        savedAt: new Date().toISOString(),
      }

      await store.setJSON(cacheKey, calendar, { onlyIfNew: true })
      return jsonResponse({ ...calendar, cache: 'miss' }, 200, true)
    } finally {
      await store.delete(lockKey).catch(() => undefined)
    }
  } catch (error) {
    console.error('Festival calendar request failed:', error)
    return jsonResponse({ error: 'Festival calendar is temporarily unavailable' }, 502)
  }
}

