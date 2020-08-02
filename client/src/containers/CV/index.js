import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

// Stylesheets and other assets
import "./style.css";

// Components
import Strength from "../../components/CV/Strength";
import Experience from "../../components/CV/Experience";
import Education from "../../components/CV/Education";
import Publication from "../../components/CV/Publication";

// Backend services
import ExperienceService from "../../services/ExperienceService";
import EducationService from "../../services/EducationService";
import PublicationService from "../../services/PublicationService";

// Document title
const cvTitle = "CV";

// Redirect URL for error
const errorURL = "/error";

const CV = (props) => {
  // state hooks
  const [strengths, setStrengths] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [publications, setPublications] = useState([]);

  // setting up history for redirection (in the case of a 500)
  const history = useHistory();

  // Loading the components of the CV from the backend
  useEffect(() => {
    // Setting the document title
    document.title = cvTitle;
    // Strengths and attributes
    setStrengths([
      "Back-end web development (Node.js, SQL Server, MongoDB, Express)",
      "Front-end web development (React, HTML, Bootstrap CSS)",
      "Infrastructure (Microsoft IIS, Microsoft Azure, AWS)",
      "Agile methodology",
      "Scientific computing (Python, MATLAB, R)",
      "Mathematical teaching (secondary and tertiary level)",
      "Natural languages: English (native), Mandarin Chinese (fluent)",
    ]);
    // Setting up async function to fetch CV data from backend (effect cbs are synchronous to prevent race conditions)
    const fetchCVData = async () => {
      const getExperienceReq = await ExperienceService.getAllExperience();
      const getEducationReq = await EducationService.getAllEducation();
      const getPublicationReq = await PublicationService.getAllPublication();
      setExperiences(getExperienceReq.data.experience);
      setEducations(getEducationReq.data.education);
      setPublications(getPublicationReq.data.publication);
    };
    // Execute the requests and pray it doesn't break
    try {
      fetchCVData();
    } catch (err) {
      // If the status is 500 from the backend, it'll get caught here.
      history.push(errorURL);
    }
  }, [history]);

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="cv-heading">curriculum vitae</h1>
        </Col>
      </Row>
      {/* Strengths and attributes */}
      <Row>
        <Col lg={12}>
          <h2 className="cv-section-heading">Strengths and attributes</h2>
          <hr className="hr-heading"></hr>
          <Strength strengthsList={strengths}></Strength>
        </Col>
      </Row>
      {/* Professional work experience */}
      <Row>
        <Col lg={12}>
          <h2 className="cv-section-heading">Experience</h2>
          <hr className="hr-heading"></hr>
        </Col>
      </Row>
      <Experience experienceList={experiences}></Experience>
      {/* Education */}
      <Row>
        <Col lg={12}>
          <h2 className="cv-section-heading">Education</h2>
          <hr className="hr-heading"></hr>
        </Col>
      </Row>
      <Education educationList={educations}></Education>
      {/* Publications */}
      <Row>
        <Col lg={12}>
          <h2 className="cv-section-heading">Publications</h2>
          <hr className="hr-heading"></hr>
          <Publication publicationsList={publications}></Publication>
        </Col>
      </Row>
    </Container>
  );
};

export default CV;
