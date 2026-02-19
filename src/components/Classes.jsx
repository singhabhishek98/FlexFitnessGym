const Classes = () => {
  const classes = [
    { icon: 'fa-heartbeat', title: 'Cardio Training', desc: 'High-intensity cardio workouts to boost endurance and burn calories' },
    { icon: 'fa-dumbbell', title: 'Strength Training', desc: 'Build muscle and increase strength with our expert-led programs' },
    { icon: 'fa-spa', title: 'Yoga & Pilates', desc: 'Improve flexibility, balance, and mental wellness' },
    { icon: 'fa-running', title: 'CrossFit', desc: 'Intense functional training for total body conditioning' },
    { icon: 'fa-boxing-glove', title: 'Boxing', desc: 'Learn boxing techniques while getting an amazing workout' },
    { icon: 'fa-users', title: 'Group Training', desc: 'Motivating group sessions for all fitness levels' }
  ]

  return (
    <section id="classes" className="classes">
      <div className="container">
        <div className="section-title">
          <h2>Our Classes</h2>
          <div className="title-underline"></div>
        </div>
        <div className="classes-grid">
          {classes.map((item, index) => (
            <div key={index} className="class-card">
              <i className={`fas ${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
