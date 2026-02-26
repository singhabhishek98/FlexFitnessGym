const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleVideoLoad = (e) => {
    e.target.playbackRate = 0.5
  }

  return (
    <section id="home" className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="metadata"
        className="hero-video" 
        onLoadedMetadata={handleVideoLoad}
      >
        <source src="https://res.cloudinary.com/dntkqvsky/video/upload/q_auto,f_auto/v1771962123/vid_oz1jwy.mp4" type="video/mp4" />
        <source src="/images/vid.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>𝐅𝐥𝐞𝐱 | 𝐅𝐢𝐭𝐧𝐞𝐬𝐬 | 𝐆𝐲𝐦</h1>
        <p className="hero-slogan">The Revolution is Coming</p>
        <span className="hero-badge">For Men & Women</span>
        <div className="hero-cta">
          <button onClick={() => scrollToSection('contact')} className="btn-secondary">Book Free Trial</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
