const Team = () => {
  const team = [
    { img: 'images/shiv.png', name: 'ShivMangal', role: 'Head Trainer' },
    { img: 'images/Awanish.png', name: 'Awanish Singh', role: 'Head Trainer' },
    { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300', name: 'David Martinez', role: 'CrossFit Coach' },
    { img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=300', name: 'Emily Chen', role: 'Nutritionist' }
  ]

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <div className="title-underline"></div>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <img src={member.img} alt={member.name} />
                <div className="avatar-ring"></div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-x-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
