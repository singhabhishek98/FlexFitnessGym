import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      text: 'Flex Fitness transformed my life! The trainers are amazing and the facilities are top-notch. I lost 30 pounds in 3 months!',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Yoga Practitioner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      text: 'Best gym experience ever! The yoga classes are incredible and the community is so supportive. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Bodybuilder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      text: 'The equipment is state-of-the-art and the personal training sessions helped me achieve my bodybuilding goals faster than expected.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Weight Loss Journey',
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
                      <p>{item.role}</p>
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
