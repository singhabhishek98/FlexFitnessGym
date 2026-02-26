import { useState } from 'react'

const Contact = () => {
  const [charCount, setCharCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const SERVICE_ID = 'service_o1z96gk'
  const TEMPLATE_ID = 'template_ks7pr8c'
  const USER_ID = 'ACuF9_QQm5gpbNA0N'

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

  const handleMobileInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const mobile = formData.get('mobile').trim()
    const message = formData.get('message').trim()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name) {
      showToast('Please enter your name', 'warning')
      return
    }

    if (!email || !emailPattern.test(email)) {
      showToast('Please enter a valid email', 'warning')
      return
    }

    if (!mobile || mobile.length !== 10 || !/^[0-9]{10}$/.test(mobile)) {
      showToast('Please enter a valid 10-digit mobile number', 'warning')
      return
    }

    setIsSubmitting(true)

    const templateParams = {
      name: name,
      email: email,
      phone: mobile,
      message: message || 'No message provided'
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      showToast('Message sent successfully! 🚀', 'success')
      e.target.reset()
      setCharCount(0)
    } catch (error) {
      console.error('Failed to send email:', error)
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-info-row">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
            <p>Nakain Chauraha, Near Primary School Varanasi</p>
          </div>
          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h4>Phone</h4>
            <p>+91 8303201744</p>
          </div>
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h4>Email</h4>
            <p>flexfitnessvns@gmail.com</p>
          </div>
          <div className="info-card">
            <i className="fas fa-clock"></i>
            <h4>Hours</h4>
            <p>Morning: 5:00-9:30 AM</p>
            <p>Evening: 4:30-9:30 PM</p>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <i className="fas fa-user"></i>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number (10 digits)"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  title="Mobile no. should be numbers only"
                  onInput={handleMobileInput}
                  required
                />
              </div>
              <div className="form-group">
                <i className="fas fa-comment"></i>
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows="3"
                  maxLength="400"
                  onChange={(e) => setCharCount(e.target.value.length)}
                ></textarea>
                <span className="char-counter">{charCount} / 500</span>
              </div>
              <div className="button-wrapper">
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=25.27683865325454,82.93467628256006&z=18&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flex Fitness Gym Location">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
