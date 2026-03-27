const Gallery = () => {
  const images = [
    { src: '/images/gallery/1.jpg', alt: 'Flex Fitness Gym Varanasi - Training Floor' },
    { src: '/images/gallery/2.jpeg', alt: 'Flex Fitness Gym - Weight Training Equipment' },
    { src: '/images/gallery/3.jpg', alt: 'Flex Fitness Gym - Gym Facilities' },
    { src: '/images/gallery/4.jpg', alt: 'Flex Fitness Gym Varanasi - Modern Equipment' },
    { src: '/images/gallery/5.jpg', alt: 'Flex Fitness Gym - Cardio Zone' },
    { src: '/images/gallery/6.jpg', alt: 'Flex Fitness Gym - Workout Area' },
    { src: '/images/gallery/7.jpeg', alt: 'Flex Fitness Gym Varanasi - Gym Interior' },
    { src: '/images/gallery/8.jpeg', alt: 'Flex Fitness Gym - Members Training' },
  ]

  return (
    <section id="gallery" className="gallery reveal">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A glimpse of our world-class facilities</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
