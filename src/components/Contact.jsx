import { useState } from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'

const Contact = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const messageValue = Form.useWatch('message', form) ?? ''

  const SERVICE_ID = 'service_o1z96gk'
  const TEMPLATE_ID = 'template_ks7pr8c'
  const USER_ID = 'ACuF9_QQm5gpbNA0N'

  const showToast = (content, type = 'success') => {
    messageApi.open({ type, content })
  }

  const handleMobileInput = (e) => {
    const nextValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
    form.setFieldValue('mobile', nextValue)
  }

  const handleSubmit = async (values) => {
    setIsSubmitting(true)

    const templateParams = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.mobile.trim(),
      message: values.message?.trim() || 'No message provided'
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      showToast('Message sent successfully! 🚀', 'success')
      form.resetFields()
    } catch (error) {
      console.error('Failed to send email:', error)
      showToast('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact reveal">
      {contextHolder}
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-info-row">
          <Card className="info-card depth-card" bordered={false} data-tilt data-tilt-strength="5">
            <EnvironmentOutlined className="info-card-icon" />
            <h4>Address</h4>
            <p>Nakain Chauraha, Near Primary School Varanasi</p>
          </Card>
          <Card className="info-card depth-card" bordered={false} data-tilt data-tilt-strength="5">
            <PhoneOutlined className="info-card-icon" />
            <h4>Phone</h4>
            <p>+91 8303201744</p>
          </Card>
          <Card className="info-card depth-card" bordered={false} data-tilt data-tilt-strength="5">
            <MailOutlined className="info-card-icon" />
            <h4>Email</h4>
            <p>flexfitnessvns@gmail.com</p>
          </Card>
          <Card className="info-card depth-card" bordered={false} data-tilt data-tilt-strength="5">
            <ClockCircleOutlined className="info-card-icon" />
            <h4>Hours</h4>
            <p>Morning: 5:00-9:30 AM</p>
            <p>Evening: 4:30-9:30 PM</p>
          </Card>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <Card className="contact-form-card depth-panel" bordered={false} data-tilt data-tilt-strength="2">
              <Form
                form={form}
                layout="vertical"
                className="contact-form antd-contact-form"
                onFinish={handleSubmit}
                requiredMark={false}
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input size="large" prefix={<UserOutlined />} placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input size="large" prefix={<MailOutlined />} placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="mobile"
                  rules={[
                    { required: true, message: 'Please enter your mobile number' },
                    { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number' },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<PhoneOutlined />}
                    placeholder="Mobile Number (10 digits)"
                    maxLength={10}
                    onInput={handleMobileInput}
                  />
                </Form.Item>
                <Form.Item name="message" className="contact-message-item">
                  <Input.TextArea
                    rows={2}
                    maxLength={400}
                    className="contact-message-input"
                    placeholder="Message (Optional)"
                  />
                </Form.Item>
                <div className="contact-message-count">{messageValue.length} / 400</div>
                <div className="button-wrapper">
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    className="btn-primary ant-gym-btn"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
          <div className="contact-map-wrap">
            <Card className="contact-map-card depth-panel" bordered={false} data-tilt data-tilt-strength="2">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps?q=25.27683865325454,82.93467628256006&z=18&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flex Fitness Gym Location">
                </iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
