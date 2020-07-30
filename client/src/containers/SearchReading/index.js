import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";

// stylesheets and other assets
import Search from "../../components/Search";
import "./style.css";

// Backend stuff
import ReadingService from "../../services/ReadingService";

// Error URL
const errorURL = "/error";

const SearchReading = (props) => {
  // Loading the components of search reading page
  useEffect(() => {});

  return (
    <Container>
      <h1 className="search-reading-heading">reading (search)</h1>
      <Row>
        <Col xs={12}>
          <p>
            Please use the search box below if you want to try find a book that I've read (but may not be present in the
            most recent <Link to={{ pathname: `/reading/` }}>reading</Link> list). Hopefully you'll find what you're
            looking for!
          </p>
        </Col>
      </Row>
      <div className="search-bar-box">
        <Search></Search>
      </div>
    </Container>
  );
};

export default SearchReading;
