import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

// Props are passed down like normal function args
const Search = (props) => {
  // state hooks
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <Form className="search">
      <Form.Control className="search-input" value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <Button onClick={callSearchFunction} type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
