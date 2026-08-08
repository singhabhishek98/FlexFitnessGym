const About = () => {
  return (
    <section id="about" className="about reveal">
      <div className="container">
        <div className="about-showcase">
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/images/about.jpeg"
                alt="Strength-inspired artwork inside Flex Fitness Gym"
                loading="lazy"
              />
              <div className="about-image-overlay"></div>
              <div className="about-visual-tag">
                <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                <span>Strength with purpose</span>
              </div>
            </div>

            <div className="about-experience-card">
              <span className="about-experience-number">5+</span>
              <span className="about-experience-label">Years of<br />excellence</span>
            </div>

            <div className="about-visual-accent" aria-hidden="true"></div>
          </div>

          <div className="about-copy">
            <div className="about-kicker">
              <span></span>
              About Flex Fitness
            </div>

            <h2>Where discipline becomes <em>strength.</em></h2>

            <p className="about-lead">
              More than a gym, we are a community built to help you become stronger, healthier, and more confident.
            </p>

            <p className="about-description">
              With premium equipment, expert trainers, and an atmosphere that keeps you motivated, every detail at Flex Fitness is designed around your progress.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-highlight-icon">
                  <i className="fa-solid fa-dumbbell" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Premium Equipment</h3>
                  <p>Everything you need to train without limits.</p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="about-highlight-icon">
                  <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Expert Guidance</h3>
                  <p>Personal support focused on lasting progress.</p>
                </div>
              </div>
            </div>

            <div className="about-metrics" aria-label="Flex Fitness achievements">
              <div className="about-metric">
                <strong>150+</strong>
                <span>Active Members</span>
              </div>
              <div className="about-metric">
                <strong>5+</strong>
                <span>Expert Trainers</span>
              </div>
              <div className="about-metric">
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
