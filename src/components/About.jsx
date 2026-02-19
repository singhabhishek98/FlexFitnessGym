const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to Flex Fitness</h3>
            <p>We are more than just a gym - we're a community dedicated to helping you achieve your fitness goals. With state-of-the-art equipment, expert trainers, and a motivating environment, we provide everything you need to succeed.</p>
            <p>Our mission is to empower individuals to live healthier, stronger lives through personalized training programs and unwavering support.</p>
            <div className="about-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Active Members</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Expert Trainers</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600" alt="Gym" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
