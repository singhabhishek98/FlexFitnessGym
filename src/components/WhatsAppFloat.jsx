const WhatsAppFloat = () => {
  const phoneNumber = '918303201744'
  const message = 'Hi! I want to know more about Flex Fitness Gym membership.'
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <a 
      className="whatsapp-float" 
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppFloat
