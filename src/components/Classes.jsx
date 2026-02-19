const Classes = () => {
  const classes = [
    { icon: 'fa-heartbeat', title: 'Cardio Training', desc: 'High-intensity cardio workouts to boost endurance and burn calories' },
    { icon: 'fa-dumbbell', title: 'Strength Training', desc: 'Build muscle and increase strength with our expert-led programs' },
    { icon: 'fa-spa', title: 'Yoga', desc: 'Improve flexibility, balance, and mental wellness' },
    { icon: 'fa-running', title: 'CrossFit', desc: 'Intense functional training for total body conditioning' },
    { icon: 'fa-hand-fist', title: 'Boxing', desc: 'Learn boxing techniques while getting an amazing workout' },
    { icon: 'fa-bed', title: 'Recovery & Stretch Area', desc: 'Dedicated space for post-workout recovery and flexibility training' }
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
