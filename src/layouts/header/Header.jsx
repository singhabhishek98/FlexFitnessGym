import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return undefined
    }

    const sectionId = location.hash.slice(1)
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  const scrollToSection = (id) => {
    setIsOpen(false)

    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    navigate(`/#${id}`, { replace: true })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const openGallery = () => {
    setIsOpen(false)
    if (location.pathname === '/gallery') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    navigate('/gallery')
  }

  const openPricing = () => {
    setIsOpen(false)
    if (location.pathname === '/pricing') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    navigate('/pricing')
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button
          type="button"
          className="logo logo-button"
          onClick={() => navigate('/')}
          aria-label="Go to Flex Fitness Gym homepage"
        >
          <img src="/images/logo.png" alt="Flex Fitness Gym - Best Gym in Varanasi" className="logo-img" />
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('home')}>
              <i className="fa-solid fa-house" aria-hidden="true"></i>
              <span>Home</span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('about')}>
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              <span>About</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              onClick={openGallery}
            >
              <i className="fa-solid fa-images" aria-hidden="true"></i>
              <span>Gallery</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
              onClick={openPricing}
            >
              <i className="fa-solid fa-tags" aria-hidden="true"></i>
              <span>Pricing</span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('team')}>
              <i className="fa-solid fa-users" aria-hidden="true"></i>
              <span>Team</span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('contact')}>
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span>Contact</span>
            </button>
          </li>
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
