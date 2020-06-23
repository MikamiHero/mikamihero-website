import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

// The author name I use for academic publications
const mikamiheroAuthor = "T. R. Li";

// Custom function for bolding my author name in publications
const boldMe = ({ text, textToBold }) => {
  const textArr = text.split(textToBold);
  return (
    <span>
      {textArr.map((item, index) => (
        <>
          {item}
          {index !== textArr.length - 1 && <b>{textToBold}</b>}
        </>
      ))}
    </span>
  );
};

// destructure 'publicationsList' from the props object
const Publication = ({ publicationsList }) => (
  <ol>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        {publicationsList.map((publication) => (
          <li>
            {boldMe({ text: publication.authors, textToBold: mikamiheroAuthor })}
            {` (${publication.year}),`}
            {' "'}
            {publication.title}
            {'" in '}
            <i>{publication.journal}</i>
            {", vol. "}
            {publication.volume}
            {", no. "}
            {publication.number}
            {", pp. "}
            {publication.pages}
            {". (DOI: "}
            <a href={publication.doi}>{publication.doi}</a>
            {")."}
            <hr className="publication-divider" />
          </li>
        ))}
      </Col>
    </Row>
  </ol>
);

export default Publication;
