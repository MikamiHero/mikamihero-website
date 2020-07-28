import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// importing stylesheet and other assets
import "./style.css";

// Importing lodash chunk
const chunk = require("lodash.chunk");

// Props are passed down like normal function args.
// Destructure `readingList` from the props object
const ReadingList = ({ readingList }) => {
  // breaking up the reading list into inner arrays of 4 items
  const readingListChunks = chunk(readingList, 4);
  // Every 4 items will get a 'row' tag (hopefully)
  return readingListChunks.map((row) => (
    <Row>
      {row.map((reading) => (
        <Col xs={3} sm={3} md={3} lg={3} className="reading-item">
          {/* Book image is clickable if more specific info is required */}
          <Link to={{ pathname: `/reading/${reading._id}`, data: reading }}>
            <img className="reading-img" src={reading.bookCoverURL}></img>
          </Link>
        </Col>
      ))}
    </Row>
  ));
};

export default ReadingList;
