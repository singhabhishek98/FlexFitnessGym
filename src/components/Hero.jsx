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
      <div className="hero-depth-scene" aria-hidden="true">
        <span className="hero-depth-orbit hero-depth-orbit--one"></span>
        <span className="hero-depth-orbit hero-depth-orbit--two"></span>
        <span className="hero-depth-beam"></span>
      </div>
      <div className="hero-content" data-tilt data-tilt-strength="3">
        <div className="hero-eyebrow">
          <span></span>
          Premium fitness experience
          <span></span>
        </div>
        <h1><span>Flex</span> Fitness <em>Gym</em></h1>
        <p className="hero-slogan">The Revolution is Coming</p>
        <span className="hero-badge"><i className="fa-solid fa-bolt" aria-hidden="true"></i> For Men & Women</span>
      </div>
      <button
        className="hero-scroll-down"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down to About"
      >
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  )
}

export default Hero
