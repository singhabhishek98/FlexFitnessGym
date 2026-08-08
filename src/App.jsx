import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Classes from './components/Classes'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Classes />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
    <WhatsAppFloat />
  </>
)

const GalleryPage = () => (
  <>
    <Header />
    <main className="gallery-page">
      <Gallery />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
)

const PricingPage = () => (
  <>
    <Header />
    <main className="pricing-page">
      <Pricing />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
)

function App() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/gallery' || location.pathname === '/pricing') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname])

  useEffect(() => {
    const supportsTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsTilt || prefersReducedMotion) {
      return undefined
    }

    const handlePointerMove = (event) => {
      const element = event.target.closest('[data-tilt]')

      if (!element) {
        return
      }

      const bounds = element.getBoundingClientRect()
      const pointerX = (event.clientX - bounds.left) / bounds.width
      const pointerY = (event.clientY - bounds.top) / bounds.height
      const strength = Number(element.dataset.tiltStrength ?? 6)

      element.style.setProperty('--tilt-x', `${(0.5 - pointerY) * strength}deg`)
      element.style.setProperty('--tilt-y', `${(pointerX - 0.5) * strength}deg`)
      element.style.setProperty('--glow-x', `${pointerX * 100}%`)
      element.style.setProperty('--glow-y', `${pointerY * 100}%`)
    }

    const handlePointerOut = (event) => {
      const element = event.target.closest('[data-tilt]')

      if (!element || (event.relatedTarget && element.contains(event.relatedTarget))) {
        return
      }

      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
      element.style.setProperty('--glow-x', '50%')
      element.style.setProperty('--glow-y', '50%')
    }

    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerout', handlePointerOut)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
