import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Abhishek Singh',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
      text: 'The equipment is modern and well maintained. The personal training sessions completely transformed my physique and boosted my confidence. I’ve seen results much faster than I expected!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      text: 'Clean environment, top-class equipment, and motivating vibe. Flex Fitness Gym helped me stay consistent and disciplined. It’s more than a gym — it’s a fitness family.',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      text: 'Best gym experience ever! The classes are incredible and the community is so supportive. Highly recommend!',
      rating: 5
    },
    {
      name: 'Aman Singh',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      text: 'I never thought I could enjoy working out until I joined Flex Fitness. The atmosphere is motivating and results speak for themselves!',
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrent(index)
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Members Say</h2>
          <div className="title-underline"></div>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
