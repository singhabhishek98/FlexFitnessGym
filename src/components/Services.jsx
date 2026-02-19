const Services = () => {
  const services = [
    { icon: 'fa-user-tie', title: 'Personal Training', desc: 'One-on-one coaching tailored to your specific goals and needs' },
    { icon: 'fa-apple-alt', title: 'Nutrition Plans', desc: 'Customized meal plans to complement your fitness journey' },
    { icon: 'fa-calendar-check', title: 'Flexible Membership', desc: 'Choose from monthly, quarterly, or annual membership options' },
    { icon: 'fa-clock', title: '24/7 Access', desc: 'Work out on your schedule with round-the-clock gym access' }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="title-underline"></div>
        </div>
        <div className="services-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
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

export default Services
