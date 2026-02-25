const Gallery = () => {
  const images = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpeg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg'
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <div className="title-underline"></div>
        </div>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gym ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
