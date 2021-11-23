import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useSubmit from '../../hooks/submit-event-listener';

const ContactForm = () => {

    useSubmit((e) => {
        e.stopPropagation();
  e.preventDefault();
  let email = document.getElementById('contact-form-email').textContent
  let subject = document.getElementById('contact-form-subject').textContent
  let body = document.getElementById('contact-form-message').textContent
  window.open('mailto:' + email + "?subject=" + subject + "&body=" + body)
    })
    return (
<Form id="contact-form">
    <h1> Contact Form</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Email Address</Form.Label>
    <Form.Control id="contact-form-email" type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Subject</Form.Label>
    <Form.Control  id="contact-form-subject" type="message" placeholder="subject" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control  id="contact-form-message" type="message" placeholder="message" />
  </Form.Group>
  <Button id="send-email-button" variant="primary" type="submit">
    Send me an email
  </Button>
</Form>
)
}

export default ContactForm;