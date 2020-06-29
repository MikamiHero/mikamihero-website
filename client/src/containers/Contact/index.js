import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";

// Custom util functions
import validateEmail from "../../utils/validateEmail";
// Custom React hooks
import useInput from "../../hooks/inputHook";

// Stylesheets
import "./style.css";

// Contact page document title
const contactTitle = "Contact";

// Redirect URL after submitting contact form
const thankyouURL = "/thankyou";
const errorURL = "/error";

// Backend URL
const sendContactFormURL = "/contact/send";

const Contact = (props) => {
  useEffect(() => {
    // Setting the document title
    document.title = contactTitle;
  });

  // form fields hooks
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput("");
  // Loading state hook
  const [sending, setSending] = useState(false);

  // setting up history for redirection
  const history = useHistory();

  const validateForm = () => validateEmail({ email }) && name.length > 0 && message.length > 0;
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    // Setting the 'send' flag so user knows the form is being processed
    setSending(true);
    // Backend request
    const payload = { name, email, message };
    try {
      const contactBackendCall = await Axios.post(sendContactFormURL, payload);
      history.push(thankyouURL);
    } catch (err) {
      // If the status is 500 from the backend, it'll get caught here.
      history.push(errorURL);
    }

    //Resetting all the hooks
    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h5 className="h5 text-center">Contact Form</h5>
        </Col>
      </Row>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group as={Row} controlId="contactFormName">
          <Form.Label column sm={12}>
            Name
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" placeholder="What do you like to be called?" {...bindName} />
            <Form.Control.Feedback type="invalid">Please provide your name</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="contactFormEmail">
          <Form.Label column sm={12}>
            Email
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="email" placeholder="email@example.com" {...bindEmail} />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="contactFormMessage">
          <Form.Label column sm={12}>
            Your message
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required as="textarea" rows={5} placeholder="Message please..." {...bindMessage} />
            <Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button disabled={!validateForm() || sending} variant="dark" type="submit">
          {sending ? "Sending..." : "Submit"}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
