import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// stylesheets and other assets
import Search from "../../components/Search";
import ReadingList from "../../components/ReadingList";
import "./style.css";

// Backend stuff
import ReadingService from "../../services/ReadingService";

// Error URL
const errorURL = "/error";

const SearchReading = (props) => {
  // State hooks
  const [loading, setLoading] = useState(false);
  const [readings, setReadings] = useState([]);
  const [searchErrorMessage, setSearchErrorMessage] = useState(null);

  // Custom search function to be passed into the search component
  const searchReading = async (searchValue) => {
    setLoading(true);
    setSearchErrorMessage(null);
    // Fetching the backend data for the reading list
    const fetchReadingData = async () => {
      const readingBackendCall = await ReadingService.searchReading(searchValue);
      // The backend GET call is using Axios, so it'll be embedded inside 'data' attribute
      setReadings(readingBackendCall.data.reading);
    };

    // Execute the request and pray it doesn't break
    try {
      fetchReadingData();
      setLoading(false);
    } catch (err) {
      // If the status is 500 from the backend, it'll get caught here
      setSearchErrorMessage(err.message);
      setLoading(false);
    }
  };

  // Loading the components of search reading page
  return (
    <Container>
      <h1 className="search-reading-heading">reading (search)</h1>
      <Row>
        <Col xs={12}>
          <p>
            Please use the search box below if you want to try find a book that I've read (but may not be present in the
            most recent <Link to={{ pathname: `/reading` }}>reading</Link> list). Hopefully you'll find what you're
            looking for!
          </p>
        </Col>
      </Row>
      <div className="search-bar-box">
        <Search search={searchReading}></Search>
      </div>
      <div className="search-return-books">
        {loading && !searchErrorMessage ? (
          <span>Loading...</span>
        ) : searchErrorMessage ? (
          <div className="errorMessage">{searchErrorMessage}</div>
        ) : (
          <ReadingList readingList={readings}></ReadingList>
        )}
      </div>
    </Container>
  );
};

export default SearchReading;
