import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

// Thesis title
const thesisTitle = "Applications of the Mellin Transform in Mathematical Finance";

// Custom function for hyperlinking my thesis
const hyperlinkThesis = ({ text, textToLink }) => {
  const textArr = text.split(textToLink);
  return (
    <span>
      {textArr.map((item, index) => (
        <>
          {item}
          {index !== textArr.length - 1 && <a href="https://ro.uow.edu.au/theses1/189/">{textToLink}</a>}
        </>
      ))}
    </span>
  );
};

// Props are passed down like normal function args.
// Destructure `educationList` from the props object
const Education = ({ educationList }) =>
  educationList.map((education) => (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h5>{education.qualification}</h5>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <p className="education-institution">{education.institution}</p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <p>{education.location}</p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12}>
        <p className="education-duration">
          {education.startDate} - {education.endDate} {`(${education.duration})`}
        </p>
      </Col>
      {/* Only want the grade to appear for non-PhD stuff */}
      {education.qualification !== "Doctor of Philosophy (Mathematics)" ? (
        <Col xs={12} sm={12} md={12} lg={12}>
          <p>{education.finalGrade}</p>
        </Col>
      ) : (
        ""
      )}
      {/* Only display extra notes for PhD for now (hyperlink thesis) */}
      {education.qualification !== "Doctor of Philosophy (Mathematics)" ? (
        ""
      ) : (
        <Col xs={12} sm={12} md={12} lg={12}>
          {hyperlinkThesis({ text: education.extraNotes, textToLink: thesisTitle })}
        </Col>
      )}
      <Col xs={12} sm={12} md={12} lg={12}>
        <hr className="education-divider" />
      </Col>
    </Row>
  ));

export default Education;
