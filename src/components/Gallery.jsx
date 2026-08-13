import { useEffect, useState } from 'react'

const galleryImages = [
  { src: '/images/gallery/2.png', alt: 'Flex Fitness Gym Varanasi training floor', label: 'Training Floor' },
  { src: '/images/gallery/1.jpg', alt: 'Flex Fitness Gym weight training equipment', label: 'Strength Zone' },
  { src: '/images/gallery/3.jpg', alt: 'Flex Fitness Gym premium facilities', label: 'Premium Facilities' },
  { src: '/images/gallery/4.jpg', alt: 'Flex Fitness Gym free weight workout area', label: 'Free Weights' },
  { src: '/images/gallery/5.jpg', alt: 'Flex Fitness Gym strength training setup', label: 'Performance Setup' },
  { src: '/images/gallery/6.jpg', alt: 'Flex Fitness Gym member workout session', label: 'Member Sessions' },
  { src: '/images/gallery/7.jpeg', alt: 'Flex Fitness Gym premium interior view', label: 'Gym Interior' },
  { src: '/images/gallery/8.jpeg', alt: 'Flex Fitness Gym training atmosphere', label: 'Training Atmosphere' },
]

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selectedImage = selectedIndex === null ? null : galleryImages[selectedIndex]

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % galleryImages.length)
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  const showPrevious = (event) => {
    event.stopPropagation()
    setSelectedIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
  }

  const showNext = (event) => {
    event.stopPropagation()
    setSelectedIndex((current) => (current + 1) % galleryImages.length)
  }

  return (
    <section id="gallery" className="gallery reveal">
      <div className="container">
        <div className="gallery-heading-row">
          <div className="section-title">
            <span className="gallery-kicker"><i className="fa-solid fa-camera-retro" aria-hidden="true"></i> Inside Flex Fitness</span>
            <h2>Gallery</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Explore the space, equipment, and energy that power every workout.</p>
          </div>
          <div className="gallery-count" aria-label={`${galleryImages.length} gallery photographs`}>
            <strong>{String(galleryImages.length).padStart(2, '0')}</strong>
            <span>Real moments<br />from our gym</span>
          </div>
        </div>

        <div className="gallery-premium-grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`gallery-tile gallery-tile--${index + 1}`}
              data-tilt
              data-tilt-strength="4"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open ${image.label} photo`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="gallery-tile-shade" aria-hidden="true"></span>
              <span className="gallery-tile-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="gallery-tile-caption">
                <span>{image.label}</span>
                <i className="fa-solid fa-up-right-and-down-left-from-center" aria-hidden="true"></i>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-footnote">
          <span><i className="fa-solid fa-hand-pointer" aria-hidden="true"></i> Select any image to explore</span>
          <span className="gallery-footnote-line" aria-hidden="true"></span>
        </div>
      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.label} image viewer`}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="gallery-lightbox-glow" aria-hidden="true"></div>

          <div className="gallery-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="gallery-lightbox-topbar">
              <div>
                <span>Flex Fitness Gallery</span>
                <strong>{selectedImage.label}</strong>
              </div>
              <div className="gallery-lightbox-counter">
                {String(selectedIndex + 1).padStart(2, '0')} <span>/ {String(galleryImages.length).padStart(2, '0')}</span>
              </div>
            </div>

            <figure className="gallery-lightbox-figure">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </figure>

            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image viewer"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-control--previous"
              onClick={showPrevious}
              aria-label="Previous gallery image"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            </button>

            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-control--next"
              onClick={showNext}
              aria-label="Next gallery image"
            >
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
