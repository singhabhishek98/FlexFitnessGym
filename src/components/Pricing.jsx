const Pricing = () => {
  const allPlans = [
    {
      name: '1 MONTH',
      originalPrice: '800',
      price: '600',
      discount: '200',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '3 MONTHS',
      originalPrice: '2400',
      price: '1700',
      discount: '700',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '6 MONTHS',
      originalPrice: '4800',
      price: '3300',
      discount: '1500',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '1 YEAR',
      originalPrice: '9600',
      price: '6500',
      discount: '3100',
      badge: 'BEST VALUE',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: 'TRAINER',
      subtitle: 'PER MONTH',
      originalPrice: '1500',
      price: '1000',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      subtitle: 'FOR 3 MONTHS',
      originalPrice: '4500',
      price: '2500',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      subtitle: 'FOR 6 MONTHS',
      originalPrice: '9000',
      price: '4500',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      subtitle: 'FOR 1 YEAR',
      originalPrice: '18000',
      price: '8500',
      isTrainer: true
    }
  ]

  const handleJoinClick = () => {
    const phone = '918303201744'
    const message = 'Hi, I want to join Flex Fitness Gym. Please provide membership details.'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Membership Plans</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Choose the perfect plan for your fitness journey</p>
        </div>
        <div className="pricing-grid">
          {allPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isTrainer ? 'trainer-card' : ''}`}>
              {plan.badge && <div className="popular-badge">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              {plan.subtitle && <p style={{color: 'var(--primary-color)', fontWeight: 600, marginBottom: '1rem'}}>{plan.subtitle}</p>}
              <div className="price">
                {plan.originalPrice && (
                  <div className="original-price">₹{plan.originalPrice}</div>
                )}
                <div>
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                </div>
                {plan.discount && (
                  <div className="discount-badge">DISCOUNT ₹{plan.discount}</div>
                )}
              </div>
              {plan.features && (
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
              )}
              <button className="btn-primary" onClick={handleJoinClick}>
                {plan.isTrainer ? 'Book Now' : 'Join Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
