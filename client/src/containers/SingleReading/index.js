import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

// stylesheets and other assets
import "./style.css";

// Backend stuff
import ReadingService from "../../services/ReadingService";

// Error URL
const errorURL = "/error";

const Reading = (props) => {
  // matching the params 'readingId' from the main reading page
  const {
    match: { params },
  } = props;
  // Getting the data that may be passed from the main reading page
  const { data } = props.location;

  // state hooks
  const [reading, setReading] = useState({});

  // setting up history for redirection (in case of a 500)
  const history = useHistory();

  // Loading the components of the single reading page
  useEffect(() => {
    // if 'data' is undefined or empty (e.g., refreshed on the page), do a backend call
    if (!data) {
      const fetchReadingData = async () => {
        const readingBackendCall = await ReadingService.getOneReading(params.readingId);
        // the backend GET call is using Axios, so it'll be embedded inside 'data' attribute
        setReading(readingBackendCall.data.reading);
      };
      // Execute and pray we don't break
      try {
        fetchReadingData();
      } catch (err) {
        // A 500 from the backend will get caught here
        history.push(errorURL);
      }
    } else {
      // if 'data' is defined, simply use it
      setReading(data);
    }
  }, [history]);

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="single-reading-heading">reading</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={6}>
          <img className="rounded reading-img" src={reading.bookCoverURL}></img>
        </Col>
        <Col sm={6} lg={6}>
          {/* Book title */}
          <Col sm={12} lg={12}>
            <h4>
              <b>{reading.title}</b>
            </h4>
          </Col>
          {/* Authors*/}
          <Col sm={12} lg={12}>
            <h5>
              by <i>{reading.authors}</i>
            </h5>
          </Col>
          {/* ISBN */}
          <Col sm={12} lg={12}>
            <h6>ISBN {reading.isbn}</h6>
          </Col>
          {/* Genre */}
          <Col sm={12} lg={12}>
            <h6>{reading.genre}</h6>
          </Col>
          {/* Review */}
          <Col sm={12} lg={12}>
            <p className="reading-review">{reading.review}</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Reading;
