const Footer = () => {
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div')
    toast.className = `toast-notification ${type}`
    toast.textContent = message
    document.body.appendChild(toast)
    
    setTimeout(() => toast.classList.add('show'), 100)
    
    setTimeout(() => {
      toast.classList.remove('show')
      setTimeout(() => document.body.removeChild(toast), 300)
    }, 3000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (email) {
      showToast('Thanks for subscribing! 🎉', 'success')
      e.target.reset()
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src="images/left.png" alt="Left" className="footer-logo-img" />
              <span>FLEX FITNESS</span>
              <img src="images/right.png" alt="Right" className="footer-logo-img" />
            </div>
            <p>Transform your body and mind with our expert trainers and state-of-the-art facilities.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/flex_fitness26?igsh=MXZjOXA2cWNudmJqdA=="><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Nakain Chauraha, Near Primary School Varanasi</li>
              <li><i className="fas fa-phone"></i> +91 8303201744</li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:flexfitnessvns@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>flexfitnessvns@gmail.com</a></li>
              <li>
                <i className="fas fa-clock"></i>
                <div className="timing-wrapper">
                  <strong>Opening Hours:</strong>
                  <div className="timing-slots">
                    <span><i className="fas fa-sun"></i> Morning: 5:00-9:30 AM</span>
                    <span><i className="fas fa-moon"></i> Evening: 4:30-9:30 PM</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on our latest offers</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="email" placeholder="Your Email" required />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Flex Fitness Gym. All Rights Reserved. | Designed by <a href="https://codebyabhi.netlify.app/" target="_blank" rel="noopener noreferrer">CodeByAbhi</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
