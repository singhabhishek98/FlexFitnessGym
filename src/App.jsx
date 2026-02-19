import { useState } from 'react'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppFloat from './pages/whatsapp/WhatsAppFloat'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
