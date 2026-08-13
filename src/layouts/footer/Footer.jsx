import { Button, Input, message } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const socialLinks = [
    {
      href: 'https://www.facebook.com/',
      icon: 'fab fa-facebook-f',
      label: 'Facebook',
      platform: 'facebook'
    },
    {
      href: 'https://www.instagram.com/flex_fitness26?igsh=MXZjOXA2cWNudmJqdA==',
      icon: 'fab fa-instagram',
      label: 'Instagram',
      platform: 'instagram'
    },
    {
      href: 'https://x.com/',
      icon: 'fa-brands fa-x-twitter',
      label: 'X',
      platform: 'x'
    },
    {
      href: 'https://www.youtube.com/',
      icon: 'fab fa-youtube',
      label: 'YouTube',
      platform: 'youtube'
    }
  ]

  const showToast = (message, type = 'success') => {
    messageApi.open({ type, content: message })
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
      {contextHolder}
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src="/images/left.png" alt="Left" className="footer-logo-img" />
              <span>FLEX FITNESS</span>
              <img src="/images/right.png" alt="Right" className="footer-logo-img" />
            </div>
            <p>Transform your body and mind with our expert trainers and state-of-the-art facilities.</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`social-link ${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/#home">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
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
              <Input size="large" type="email" name="email" placeholder="Your Email" required />
              <Button htmlType="submit" type="primary" size="large" icon={<SendOutlined />} />
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
