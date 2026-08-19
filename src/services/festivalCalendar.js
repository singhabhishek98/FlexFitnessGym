const CACHE_VERSION = 1
const CACHE_PREFIX = `flex-fitness-festivals:v${CACHE_VERSION}:IN`
const FESTIVAL_ENDPOINT = '/.netlify/functions/festivals'

const getCacheKey = (year) => `${CACHE_PREFIX}:${year}`

const isValidCalendar = (calendar, year) => (
  calendar?.version === CACHE_VERSION
  && calendar?.country === 'IN'
  && calendar?.year === year
  && Array.isArray(calendar?.festivals)
  && calendar.festivals.every(({ slug, date }) => (
    typeof slug === 'string' && typeof date === 'string' && date.startsWith(`${year}-`)
  ))
)

const readBrowserCache = (year) => {
  try {
    const cached = window.localStorage.getItem(getCacheKey(year))
    const calendar = cached ? JSON.parse(cached) : null
    return isValidCalendar(calendar, year) ? calendar : null
  } catch {
    return null
  }
}

const saveBrowserCache = (year, calendar) => {
  try {
    window.localStorage.setItem(getCacheKey(year), JSON.stringify(calendar))
  } catch {
    // Storage can be unavailable in private browsing; the shared server cache still works.
  }
}

export const loadFestivalCalendar = async (year, signal) => {
  const cached = readBrowserCache(year)

  if (cached) {
    return { ...cached, cache: 'browser' }
  }

  const response = await fetch(`${FESTIVAL_ENDPOINT}?year=${year}`, {
    headers: { accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Festival calendar request failed with status ${response.status}`)
  }

  const calendar = await response.json()

  if (!isValidCalendar(calendar, year)) {
    throw new Error('Festival calendar response is invalid')
  }

  saveBrowserCache(year, calendar)
  return calendar
}

