import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Custom components
import Message from "../../components/Message";

// Backend and authentication stuff
import { AuthContext } from "../../context/AuthContext";
import ReadingService from "../../services/ReadingService";

// Custom React hooks
import useInput from "../../hooks/inputHook";

// Stylesheets
import "./style.css";

// Error URL
const errorURL = "/error";

// Add a new reading document title
const newReadingTitle = "New reading";

const NewReading = (props) => {
  useEffect(() => {
    // Setting the document title
    document.title = newReadingTitle;
  });

  // form fields hooks
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: authors, bind: bindAuthors, reset: resetAuthors } = useInput("");
  const { value: isbn, bind: bindisbn, reset: resetisbn } = useInput("");
  const { value: genre, bind: bindGenre, reset: resetGenre } = useInput("");
  const { value: review, bind: bindReview, reset: resetReview } = useInput("");
  const { value: bookCoverURL, bind: bindBookCoverURL, reset: resetBookCoverURL } = useInput("");
  const [readDate, setReadDate] = useState(new Date());

  // Other hooks we need
  const [message, setMessage] = useState({ success: null, msg: "" });
  const authContext = useContext(AuthContext);

  // Loading state hook
  const [sending, setSending] = useState(false);

  // Form validation
  const validateForm = () => title.length > 0 && authors.length > 0 && readDate && isbn.length > 0 && genre.length > 0;

  // Form submission
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      // New reading backend request
      const newReading = { title, authors, readDate, isbn, genre, review, bookCoverURL };
      const newReadingBackendCall = await ReadingService.postReading(newReading);
      // Form logic
      await submitFormFlow({ backendCall: newReadingBackendCall });
    } catch (err) {
      // If error, we'll swallow it and push to error page
      props.history.push(errorURL);
    }
  };

  // Submit form logic flow (may be able to extract out into its own function?)
  const submitFormFlow = async ({ backendCall }) => {
    // extracting the attributes (only 401 will have authError attribute)
    const { success, message, authError } = backendCall;
    if (authError === true) {
      // Resetting user and auth (because a 401 means jwt token is either invalid or not there)
      authContext.setUser({ username: "", role: "" });
      authContext.setIsAuthenticated(false);
      // Resetting just the 'sending' state (so we can submit again w/o resetting entire form)
      setSending(false);
    } else if (!authError && success === false) {
      setSending(false);
    } else {
      // if successful, notify user and reset form
      resetForm();
    }
    setMessage({ success, msg: message });
  };

  // Form reset upon valid submission
  const resetForm = () => {
    resetTitle();
    resetAuthors();
    resetisbn();
    resetGenre();
    resetReview();
    resetBookCoverURL();
    setSending(false);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h5 className="text-center">New reading entry</h5>
        </Col>
      </Row>
      {message.success !== null ? <Message message={message} /> : null}
      <Form onSubmit={handleSubmitForm}>
        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Title
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" {...bindTitle} />
            <Form.Control.Feedback type="invalid">Please provide the title</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Authors
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" {...bindAuthors} />
            <Form.Control.Feedback type="invalid">Please provide the authors</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Date read
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <DatePicker required dateFormat="dd-MMM-yyyy" selected={readDate} onChange={(date) => setReadDate(date)} />
            <Form.Control.Feedback type="invalid">Please provide the authors</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            ISBN
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" {...bindisbn} />
            <Form.Control.Feedback type="invalid">Please provide the ISBN</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Genre
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" {...bindGenre} />
            <Form.Control.Feedback type="invalid">Please provide the genre</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Review
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control as="textarea" rows={5} placeholder="Your review..." {...bindReview} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={12}>
            Book cover URL
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control type="text" {...bindBookCoverURL} />
          </Col>
        </Form.Group>

        <Button disabled={!validateForm() || sending} variant="dark" type="submit">
          {sending ? "Sending..." : "Add new reading"}
        </Button>
      </Form>
    </Container>
  );
};

export default NewReading;
