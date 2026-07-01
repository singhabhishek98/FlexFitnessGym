import { useEffect, useRef, useState } from 'react'

const AUTO_ROTATE_MS = 2300
const SWIPE_THRESHOLD = 50

const Gallery = () => {
  const images = [
    { src: '/images/gallery/1.jpg', alt: 'Flex Fitness Gym Varanasi - Training Floor' },
    { src: '/images/gallery/2.jpeg', alt: 'Flex Fitness Gym - Weight Training Equipment' },
    { src: '/images/gallery/3.jpg', alt: 'Flex Fitness Gym - Gym Facilities' },
    { src: '/images/gallery/4.jpg', alt: 'Flex Fitness Gym - Free weight workout area' },
    { src: '/images/gallery/5.jpg', alt: 'Flex Fitness Gym - Strength training setup' },
    { src: '/images/gallery/6.jpg', alt: 'Flex Fitness Gym - Member workout session' },
    { src: '/images/gallery/7.jpeg', alt: 'Flex Fitness Gym - Premium interior view' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartXRef = useRef(0)

  const totalImages = images.length
  const prevIndex = (activeIndex - 1 + totalImages) % totalImages
  const nextIndex = (activeIndex + 1) % totalImages

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalImages)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, totalImages])

  const goToIndex = (index) => {
    setActiveIndex(index)
  }

  const goNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalImages)
  }

  const goPrev = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + totalImages) % totalImages)
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? 0
  }

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0
    const deltaX = touchEndX - touchStartXRef.current

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
      return
    }

    if (deltaX < 0) {
      goNext()
      return
    }

    goPrev()
  }

  const visibleSlides = [
    { index: prevIndex, position: 'left' },
    { index: activeIndex, position: 'center' },
    { index: nextIndex, position: 'right' },
  ]

  return (
    <section id="gallery" className="gallery reveal">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A glimpse of our world-class facilities</p>
        </div>

        <div
          className="gallery-carousel-shell"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="gallery-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleSlides.map(({ index, position }) => {
              const image = images[index]
              const isCenter = position === 'center'

              return (
                <button
                  key={`${position}-${image.src}`}
                  type="button"
                  className={`gallery-card gallery-card-${position}`}
                  onClick={() => !isCenter && goToIndex(index)}
                  aria-label={isCenter ? image.alt : `Show ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span className="gallery-slide-overlay" />
                </button>
              )
            })}

            <button type="button" className="gallery-nav gallery-nav-prev" onClick={goPrev} aria-label="Previous image">
              &#8249;
            </button>
            <button type="button" className="gallery-nav gallery-nav-next" onClick={goNext} aria-label="Next image">
              &#8250;
            </button>
          </div>

          <div className="gallery-dots" aria-label="Gallery navigation">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`gallery-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => goToIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
