const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <i className="fas fa-dumbbell"></i>
              <span>FLEX FITNESS</span>
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
              <li><i className="fas fa-map-marker-alt"></i> 123 Fitness Street, GC 12345</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@flexfitness.com</li>
              <li><i className="fas fa-clock"></i> 24/7 Open</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on our latest offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Flex Fitness Gym. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
