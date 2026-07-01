import { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button
          type="button"
          className="logo logo-button"
          onClick={() => window.location.href = 'https://flexfitnessvns.netlify.app'}
          aria-label="Go to Flex Fitness Gym homepage"
        >
          <img src="/images/logo.png" alt="Flex Fitness Gym - Best Gym in Varanasi" className="logo-img" />
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('pricing')}>Pricing</button></li>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('team')}>Team</button></li>
          <li><button type="button" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Header
