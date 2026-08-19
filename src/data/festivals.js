const FESTIVALS = {
  'new-year': {
    slug: 'new-year',
    name: 'New Year',
    greeting: 'Happy New Year!',
    message: 'A stronger year starts today.',
    icon: '🎉',
    theme: 'new-year',
    symbols: ['◆', '●', '✦'],
    palette: ['#ff6b00', '#ffd166', '#ffffff', '#46d7ff', '#a855f7'],
  },
  'republic-day': {
    slug: 'republic-day',
    name: 'Republic Day',
    greeting: 'Happy Republic Day!',
    message: 'Strength, unity and pride in every stride.',
    icon: '🇮🇳',
    theme: 'tricolour',
    symbols: ['●', '◆', '✦'],
    palette: ['#ff9933', '#ffffff', '#138808', '#1a4fa3'],
  },
  holi: {
    slug: 'holi',
    name: 'Holi',
    greeting: 'Happy Holi!',
    message: 'Train hard. Live bright. Celebrate in colour.',
    icon: '🎨',
    theme: 'holi',
    symbols: ['●', '●', '✦'],
    palette: ['#ff2d75', '#ffb800', '#00c2ff', '#7c3aed', '#22c55e'],
  },
  'independence-day': {
    slug: 'independence-day',
    name: 'Independence Day',
    greeting: 'Happy Independence Day!',
    message: 'Freedom is our strength. India is our pride.',
    icon: '🇮🇳',
    theme: 'tricolour',
    symbols: ['●', '◆', '✦'],
    palette: ['#ff9933', '#ffffff', '#138808', '#1a4fa3'],
  },
  'raksha-bandhan': {
    slug: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    greeting: 'Happy Raksha Bandhan!',
    message: 'Celebrating the bond that always makes us stronger.',
    icon: '🧿',
    theme: 'rakhi',
    symbols: ['✦', '❋', '●'],
    palette: ['#f4c451', '#ff6b00', '#ef476f', '#8b5cf6'],
  },
  janmashtami: {
    slug: 'janmashtami',
    name: 'Janmashtami',
    greeting: 'Happy Janmashtami!',
    message: 'May joy, courage and balance guide every step.',
    icon: '🦚',
    theme: 'janmashtami',
    symbols: ['✦', '●', '❋'],
    palette: ['#00a6a6', '#2563eb', '#f4c451', '#8b5cf6'],
  },
  diwali: {
    slug: 'diwali',
    name: 'Diwali',
    greeting: 'Happy Diwali!',
    message: 'May every goal shine brighter this year.',
    icon: '🪔',
    theme: 'diwali',
    symbols: ['✦', '✧', '●'],
    palette: ['#ffd166', '#ff8c42', '#ffffff', '#ffca28'],
  },
  christmas: {
    slug: 'christmas',
    name: 'Christmas',
    greeting: 'Merry Christmas!',
    message: 'Wishing you strength, joy and a season full of energy.',
    icon: '🎄',
    theme: 'christmas',
    symbols: ['❄', '✦', '•'],
    palette: ['#ffffff', '#dff6ff', '#ef4444', '#22c55e'],
  },
}

const FIXED_DATES = {
  '01-01': 'new-year',
  '01-26': 'republic-day',
  '08-15': 'independence-day',
  '12-25': 'christmas',
}

// Lunar festival dates move each year, so they stay explicit and easy to update.
// 2026 dates follow the Government of India holiday calendar for India.
const VARIABLE_DATES = {
  '2026-03-04': 'holi',
  '2026-08-28': 'raksha-bandhan',
  '2026-09-04': 'janmashtami',
  '2026-08-18': 'diwali',
  '2027-03-22': 'holi',
  '2027-08-17': 'raksha-bandhan',
  '2027-08-25': 'janmashtami',
  '2027-10-29': 'diwali',
  '2028-03-11': 'holi',
  '2028-08-05': 'raksha-bandhan',
  '2028-08-13': 'janmashtami',
  '2028-10-17': 'diwali',
}

const INDIA_DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

export const getIndiaDateKey = (date) => {
  const parts = INDIA_DATE_FORMATTER.formatToParts(date)
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]))
  return `${values.year}-${values.month}-${values.day}`
}

export const getIndiaYear = (date = new Date()) => Number(getIndiaDateKey(date).slice(0, 4))

export const getFestivalBySlug = (slug) => FESTIVALS[slug] ?? null

export const getActiveFestival = (date = new Date(), previewSlug = '', apiFestivals = []) => {
  const previewFestival = getFestivalBySlug(previewSlug)

  if (previewFestival) {
    return { ...previewFestival, isPreview: true }
  }

  const dateKey = getIndiaDateKey(date)
  const apiFestival = apiFestivals.find((entry) => entry.date === dateKey)
  const slug = apiFestival?.slug ?? VARIABLE_DATES[dateKey] ?? FIXED_DATES[dateKey.slice(5)]
  const festival = getFestivalBySlug(slug)

  return festival ? { ...festival, dateKey, isPreview: false } : null
}

export const FESTIVAL_PREVIEW_SLUGS = Object.keys(FESTIVALS)

