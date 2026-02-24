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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Classes />
      <Pricing />
      <Team />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
