import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing stylesheet and other assets
import "./style.css";

// Props are passed down like normal function args.
// Destructure `experienceList` from the props object
const Experience = ({ experienceList }) =>
  experienceList.map((experience) => (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h5>{experience.position}</h5>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <p className="experience-company">{experience.company}</p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <p>{experience.location}</p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12}>
        <p className="experience-duration">
          {experience.startDate} - {experience.endDate} {`(${experience.duration})`}
        </p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12}>
        <p>{experience.description}</p>
        <hr className="experience-divider" />
      </Col>
    </Row>
  ));

export default Experience;
