const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleVideoLoad = (e) => {
    e.target.playbackRate = 0.5
  }

  return (
    <section id="home" className="hero">
      <video autoPlay loop muted playsInline className="hero-video" onLoadedMetadata={handleVideoLoad}>
        <source src="/images/vid.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>TRANSFORM YOUR BODY</h1>
        <p>Build Strength, Gain Confidence, Live Better</p>
        <span className="hero-badge">For Men & Women</span>
        <div className="hero-cta">
          <button onClick={() => scrollToSection('pricing')} className="btn-primary">View Membership Plans</button>
          <button onClick={() => scrollToSection('contact')} className="btn-secondary">Book Free Trial</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
