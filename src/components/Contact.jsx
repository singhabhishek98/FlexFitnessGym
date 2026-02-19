const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p> Nakain Chauraha, Near Primary School Varanasi</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p> +91 8303201744</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@flexfitness.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Hours</h4>
                  <p>24/7 Open</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1771483609225!6m8!1m7!1sI7Gq6UatoGduG38lmevrMw!2m2!1d25.27683865325454!2d82.93467628256006!3f175.45464104612688!4f-7.933781143871457!5f0.7820865974627469" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
