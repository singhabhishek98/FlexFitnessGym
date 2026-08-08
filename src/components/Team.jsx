const Team = () => {
  const team = [
    { img: '/images/shiv.png', name: 'Shiv Mangal', role: 'Head Trainer', socials: [] },
    { img: '/images/Awanish.png', name: 'Awanish Singh', role: 'Head Trainer', socials: [] },
  ]

  return (
    <section id="team" className="team reveal">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <div className="title-underline"></div>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card depth-card" data-tilt data-tilt-strength="6">
              <span className="team-card-index">Coach 0{index + 1}</span>
              <div className="team-avatar">
                <img src={member.img} alt={member.name} />
                <div className="avatar-ring"></div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-specialty"><i className="fa-solid fa-medal" aria-hidden="true"></i> Certified Fitness Coach</div>
              {member.socials.length > 0 && (
                <div className="team-social">
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`social-link ${social.platform}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${social.label}`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
