import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthService from "../../services/AuthService";
import { AuthContext } from "../../context/AuthContext";

// Custom components
import Message from "../../components/Message";

// Custom React hooks
import useInput from "../../hooks/inputHook";

// Stylesheets and other assets
import "./style.css";

// Login page document title
const loginTitle = "Login";

// Error URL
const errorURL = "/error";

const Login = (props) => {
  useEffect(() => {
    // setting the doc title
    document.title = loginTitle;
  });

  const [message, setMessage] = useState({ success: true, error: "" });
  const authContext = useContext(AuthContext);

  // form fields hooks
  const { value: username, bind: bindUsername, reset: resetUsername } = useInput("");
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput("");

  // form validation
  const validateForm = () => username.length > 0 && password.length > 0;

  // form submission
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      // Logging in (backend request)
      const userToLogin = { username, password };
      const loginBackendCall = await AuthService.login(userToLogin);
      // data attribute has the values we want
      const { isAuthenticated, user } = loginBackendCall;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        // history is from React router
        props.history.push("/");
      } else {
        // If isAuthenticated is false, username or password is incorrect (401)
        setMessage({ success: false, error: "Invalid username or password" });
      }
    } catch (err) {
      // If error, we'll swallow it and push to error page
      props.history.push(errorURL);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h5 className="h5 text-center">Login</h5>
        </Col>
      </Row>
      {!message.success ? <Message message={message} /> : null}
      <Form onSubmit={handleSubmitForm}>
        <Form.Group as={Row} controlId="loginFormUsername">
          <Form.Label column sm={12}>
            Username
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="text" placeholder="Your username" {...bindUsername} />
            <Form.Control.Feedback type="invalid">Please provide your username</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="loginFormPassword">
          <Form.Label column sm={12}>
            Password
          </Form.Label>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control required type="password" placeholder="Your password" {...bindPassword} />
            <Form.Control.Feedback type="invalid">Please provide your password</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button disabled={!validateForm()} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
