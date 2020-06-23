import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Stylesheet and assets
import "./style.css";

const ThankYou = (props) => {
  return (
    <Jumbotron className="vertical-center">
      <Container className="text-center">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <h1>Thank you!</h1>
            <p>Your contact form has been received. I will get back to you as soon as possible.</p>
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

export default ThankYou;
