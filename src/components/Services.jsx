const Services = () => {
  const services = [
    { icon: 'fa-user-tie', title: 'Personal Training', desc: 'One-on-one coaching tailored to your specific goals and needs' },
    { icon: 'fa-apple-alt', title: 'Diet Plans', desc: 'Customized meal plans to complement your fitness journey' },
    { icon: 'fa-person', title: 'Weight Gain', desc: 'Build muscle mass with specialized training and nutrition programs' },
    { icon: 'fa-clock', title: 'Body Transformation', desc: 'Complete body makeover with expert guidance and proven results' }
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
