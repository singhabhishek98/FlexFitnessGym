const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=400'
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
