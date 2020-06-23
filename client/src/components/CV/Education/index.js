import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

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
      <Col xs={12} sm={12} md={12} lg={12}>
        <hr className="education-divider" />
      </Col>
    </Row>
  ));

export default Education;
