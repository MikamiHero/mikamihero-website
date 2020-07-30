import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";

// stylesheets and other assets
import "./style.css";

// Components
import ReadingList from "../../components/ReadingList";

// Backend stuff
import ReadingService from "../../services/ReadingService";

// Error URL
const errorURL = "/error";

// Reading document title
const readingTitle = "Reading";

const Reading = (props) => {
  // state hooks
  const [readings, setReadings] = useState([]);

  // setting up history for redirection (in case of a 500)
  const history = useHistory();

  // Loading the components of the reading page from the backend (e.g., reading list)
  useEffect(() => {
    // setting the document title
    document.title = readingTitle;

    // Fetching the backend data for the reading list
    const fetchReadingData = async () => {
      const readingBackendCall = await ReadingService.getAllReading();
      // The backend GET call is using Axios, so it'll be embedded inside 'data' attribute
      setReadings(readingBackendCall.data.reading);
    };

    // Execute the request and pray it doesn't break
    try {
      fetchReadingData();
    } catch (err) {
      // If the status is 500 from the backend, it'll get caught here
      history.push(errorURL);
    }
  }, [history]);
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="reading-heading ">reading</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p>
            I love reading and I try to finish anywhere from 3 to 5 books in a month. Below you'll find a list of books
            that I've read (sorted by descending order of date finished). If you click on the book cover, it'll take you
            to a page with more information about the book (e.g., genre, ISBN) as well as a short review (if I've
            provided one). Alternatively, you may want to go <Link to={{ pathname: `/reading-search/` }}>here</Link> if
            you want to search for a book that I might have read.
          </p>
        </Col>
      </Row>
      <ReadingList readingList={readings}></ReadingList>
    </Container>
  );
};

export default Reading;
