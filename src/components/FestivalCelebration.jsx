import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { getActiveFestival, getIndiaYear } from '../data/festivals'
import { loadFestivalCalendar } from '../services/festivalCalendar'
import { launchFestivalConfetti, resetFestivalConfetti } from '../utils/festivalConfetti'

const CELEBRATION_DURATION = 4800
const PARTICLE_COUNT = 18

const getPreviewSlug = () => {
  if (typeof window === 'undefined') {
    return ''
  }

  return new URLSearchParams(window.location.search).get('festival')?.trim().toLowerCase() ?? ''
}

const FestivalCelebration = () => {
  const [festival, setFestival] = useState(() => getActiveFestival(new Date(), getPreviewSlug()))
  const [apiFestivals, setApiFestivals] = useState([])
  const [isCelebrating, setIsCelebrating] = useState(false)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    // Vite's standalone dev server does not execute Netlify Functions.
    // Local date rules remain available, while deployed builds use the API cache.
    if (import.meta.env.DEV) {
      return () => resetFestivalConfetti()
    }

    const abortController = new AbortController()
    const loadCurrentYear = async () => {
      const year = getIndiaYear()

      try {
        const calendar = await loadFestivalCalendar(year, abortController.signal)
        setApiFestivals(calendar.festivals)
      } catch {
        // Local date rules keep the celebration working in preview/offline mode.
      }
    }

    loadCurrentYear()
    const calendarTimer = window.setInterval(loadCurrentYear, 60 * 60 * 1000)

    return () => {
      abortController.abort()
      window.clearInterval(calendarTimer)
      resetFestivalConfetti()
    }
  }, [])

  useEffect(() => {
    const refreshFestival = () => setFestival(getActiveFestival(new Date(), getPreviewSlug(), apiFestivals))
    refreshFestival()
    const timer = window.setInterval(refreshFestival, 60 * 1000)

    return () => window.clearInterval(timer)
  }, [apiFestivals])

  useEffect(() => {
    if (!isCelebrating) {
      return undefined
    }

    const stopTimer = window.setTimeout(() => setIsCelebrating(false), CELEBRATION_DURATION)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCelebrating(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(stopTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCelebrating, runId])

  const particles = useMemo(() => {
    if (!festival) {
      return []
    }

    return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      id: `${festival.slug}-${index}`,
      symbol: festival.symbols[index % festival.symbols.length],
      style: {
        '--particle-left': `${(index * 37 + 7) % 100}%`,
        '--particle-delay': `${(index % 10) * 0.085}s`,
        '--particle-duration': `${3.1 + (index % 7) * 0.24}s`,
        '--particle-drift': `${((index * 29) % 150) - 75}px`,
        '--particle-spin': `${index % 2 === 0 ? 480 : -480}deg`,
        '--particle-size': `${0.7 + (index % 5) * 0.17}rem`,
        '--particle-color': festival.palette[index % festival.palette.length],
      },
    }))
  }, [festival])

  if (!festival) {
    return null
  }

  const startCelebration = () => {
    setRunId((currentRun) => currentRun + 1)
    setIsCelebrating(true)
    launchFestivalConfetti(festival)
  }

  const celebrationLayer = isCelebrating ? (
    <div
      key={runId}
      className={`festival-layer festival-layer--${festival.theme}`}
      aria-hidden="true"
    >
      <div className="festival-ambient"></div>
      <div className="festival-announcement">
        <span className="festival-announcement-icon">{festival.icon}</span>
        <span>
          <strong>{festival.greeting}</strong>
          <small>{festival.message}</small>
        </span>
      </div>
      <div className="festival-particles">
        {particles.map((particle) => (
          <span key={particle.id} className="festival-particle" style={particle.style}>
            {particle.symbol}
          </span>
        ))}
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        type="button"
        className={`festival-trigger festival-trigger--${festival.theme}`}
        onClick={startCelebration}
        aria-label={`Celebrate ${festival.name}`}
        aria-pressed={isCelebrating}
        title={`Celebrate ${festival.name}`}
      >
        <span className="festival-trigger-glow" aria-hidden="true"></span>
        <span className="festival-trigger-icon" aria-hidden="true">{festival.icon}</span>
        <span className="festival-trigger-spark festival-trigger-spark--one" aria-hidden="true">✦</span>
        <span className="festival-trigger-spark festival-trigger-spark--two" aria-hidden="true">✦</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {isCelebrating ? `${festival.greeting} ${festival.message}` : ''}
      </span>
      {typeof document !== 'undefined' && createPortal(celebrationLayer, document.body)}
    </>
  )
}

export default FestivalCelebration

