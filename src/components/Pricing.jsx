import { useState } from 'react'
import { Button, Card, Tag } from 'antd'
import { CheckCircleFilled, FireOutlined, GiftOutlined, UserOutlined } from '@ant-design/icons'

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('membership')

  const allPlans = [
    {
      name: '1 MONTH',
      level: 'STARTER',
      tone: 'ember',
      originalPrice: '800',
      price: '600',
      discount: '200',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '3 MONTHS',
      level: 'MOMENTUM',
      tone: 'sapphire',
      originalPrice: '2400',
      price: '1700',
      discount: '700',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '6 MONTHS',
      level: 'PERFORMANCE',
      tone: 'violet',
      originalPrice: '4800',
      price: '3300',
      discount: '1500',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: '1 YEAR',
      level: 'ELITE',
      tone: 'gold',
      originalPrice: '9600',
      price: '6500',
      discount: '3100',
      badge: 'BEST VALUE',
      features: ['Gym Access', 'Diet Plan', 'Best Value']
    },
    {
      name: 'TRAINER',
      level: 'FOCUS',
      tone: 'ember',
      subtitle: 'PER MONTH',
      originalPrice: '1500',
      price: '1000',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      level: 'PROGRESS',
      tone: 'sapphire',
      subtitle: 'FOR 3 MONTHS',
      originalPrice: '4500',
      price: '2500',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      level: 'PRO',
      tone: 'violet',
      subtitle: 'FOR 6 MONTHS',
      originalPrice: '9000',
      price: '4500',
      isTrainer: true
    },
    {
      name: 'TRAINER',
      level: 'MASTER',
      tone: 'gold',
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

  const categories = [
    {
      key: 'membership',
      icon: <FireOutlined />,
      label: 'Gym Membership',
      description: 'Flexible membership plans with gym access and diet guidance.',
      cta: 'Join Now',
      plans: allPlans.slice(0, 4)
    },
    {
      key: 'trainer',
      icon: <UserOutlined />,
      label: 'Personal Trainer',
      description: 'Dedicated trainer plans for focused coaching and accountability.',
      cta: 'Book Now',
      plans: allPlans.slice(4)
    }
  ]

  const activeTab = categories.find((category) => category.key === activeCategory) ?? categories[0]

  return (
    <section id="pricing" className="pricing reveal">
      <div className="container">
        <div className="section-title">
          <h2>Membership Plans</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Choose the perfect plan for your fitness journey</p>
        </div>
        <div className="pricing-switcher" role="tablist" aria-label="Pricing categories">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.key}
              className={`pricing-switcher-tab ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className="pricing-switcher-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="pricing-panel">
          <div className="pricing-panel-header">
            <div className="pricing-group-label pricing-group-label--panel">
              <span>{activeTab.icon} {activeTab.label}</span>
            </div>
            <p className="pricing-panel-description">{activeTab.description}</p>
          </div>

          <div className="pricing-grid">
            {activeTab.plans.map((plan, index) => (
            <Card
              key={`${activeTab.key}-${index}`}
              className={`pricing-card ant-pricing-card depth-card plan-tone-${plan.tone} ${plan.badge ? 'popular' : ''} ${plan.isTrainer ? 'trainer-card' : ''}`}
              bordered={false}
              data-tilt
              data-tilt-strength="5"
            >
              <span className="popular-top-rail" aria-hidden="true"></span>
              <span className="popular-orbits" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
              <div className="popular-badge">
                {plan.badge ?? (plan.isTrainer ? 'PERSONAL TRAINER' : 'MEMBERSHIP')}
              </div>
              <div className="popular-elite-label"><span></span>{plan.level}</div>
              <h3>{plan.name}</h3>
              {plan.subtitle && <p className="plan-subtitle">{plan.subtitle}</p>}
              <div className="price">
                {plan.originalPrice && (
                  <div className="original-price">₹{plan.originalPrice}</div>
                )}
                <div>
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                </div>
                {plan.discount && (
                  <Tag className="discount-badge" icon={<GiftOutlined />}>SAVE ₹{plan.discount}</Tag>
                )}
              </div>
              {plan.features && (
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><CheckCircleFilled /> {feature}</li>
                  ))}
                </ul>
              )}
              <Button type="primary" size="large" className="btn-primary ant-gym-btn" onClick={handleJoinClick}>
                {activeTab.cta}
              </Button>
            </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
