import React, { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Stylesheet and assets
import "./style.css";

// Error page title
const errorTitle = "Error";

const ErrorPage = (props) => {
  useEffect(() => {
    // Setting the document title
    document.title = errorTitle;
  });
  return (
    <Jumbotron className="vertical-center">
      <Container className="text-center">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <h1>Oops!</h1>
            <p>Looks like an error occurred. Don't worry, someone has been notified and will look into it.</p>
            <hr></hr>
            <p>
              Please click <a href="/">here</a> to go back to the home page.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default ErrorPage;
