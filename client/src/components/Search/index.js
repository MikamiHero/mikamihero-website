import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

const Search = (props) => {
  // state hooks
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <Container>
      {/*Search Input*/}
      <label className="search-label" htmlFor="search-input">
        <input type="text" value="" id="search-input" placeholder="Search..." />
        <i className="fa fa-search search-icon" />
      </label>
    </Container>
  );
};

export default Search;
