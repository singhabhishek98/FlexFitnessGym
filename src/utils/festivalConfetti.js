import confetti from 'canvas-confetti'

const BASE_OPTIONS = {
  disableForReducedMotion: true,
  zIndex: 12010,
}

const fire = (festival, options) => confetti({
  ...BASE_OPTIONS,
  colors: festival.palette,
  ...options,
})

const fireSideCannons = (festival, options = {}) => {
  fire(festival, {
    particleCount: 52,
    angle: 58,
    spread: 62,
    startVelocity: 48,
    origin: { x: 0, y: 0.72 },
    ...options,
  })
  fire(festival, {
    particleCount: 52,
    angle: 122,
    spread: 62,
    startVelocity: 48,
    origin: { x: 1, y: 0.72 },
    ...options,
  })
}

export const launchFestivalConfetti = (festival) => {
  switch (festival.theme) {
    case 'holi':
      fire(festival, {
        particleCount: 120,
        spread: 180,
        startVelocity: 38,
        gravity: 0.85,
        shapes: ['circle'],
        origin: { y: 0.5 },
      })
      break
    case 'tricolour':
      fireSideCannons(festival, { particleCount: 64, shapes: ['square', 'star'] })
      break
    case 'diwali':
      fireSideCannons(festival, {
        particleCount: 58,
        spread: 48,
        startVelocity: 55,
        gravity: 0.75,
        shapes: ['star'],
      })
      fire(festival, {
        particleCount: 38,
        spread: 360,
        startVelocity: 28,
        gravity: 0.55,
        shapes: ['star'],
        origin: { x: 0.5, y: 0.38 },
      })
      break
    case 'christmas':
      fire(festival, {
        particleCount: 110,
        spread: 150,
        startVelocity: 14,
        gravity: 0.42,
        drift: 0.2,
        ticks: 320,
        scalar: 0.8,
        shapes: ['circle', 'star'],
        origin: { y: -0.05 },
      })
      break
    case 'rakhi':
    case 'janmashtami':
      fireSideCannons(festival, {
        particleCount: 48,
        spread: 72,
        gravity: 0.72,
        shapes: ['circle', 'star'],
      })
      break
    default:
      fireSideCannons(festival, { particleCount: 62, spread: 74 })
  }
}

export const resetFestivalConfetti = () => confetti.reset()

