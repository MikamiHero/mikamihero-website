import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// stylesheets and other assets
import "./style.css";

const Programming = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="reading-heading ">reading</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p>I love reading and I read a lot.</p>
        </Col>
      </Row>
      <Row>
        {/* Oracle */}
        <Col md={12} lg={6} className="project-item">
          <h1 className="text-center">Oracle</h1>
          <h6 className="text-warning text-center">Discord bot</h6>
          <p className="project-description">
            This is a bot I've developed for my{" "}
            <a className="text-warning" href="https://discord.gg/MikamiHero">
              Discord
            </a>{" "}
            server. It essentially acts as a helper from retrieving information (e.g., speedrun world records) to also
            letting my server know when I'm live on Twitch (automated). It integrates with the speedrun.com API as well
            as Twitter's API. Built using Node.js and hosted on Heroku. The repo can be found{" "}
            <a className="text-warning" href="https://github.com/MikamiHero/oracle-discord-bot">
              here.
            </a>
          </p>
        </Col>
        {/* Website */}
        <Col md={12} lg={6} className="project-item">
          <h1 className="text-center">Website</h1>
          <h6 className="text-info text-center">Web development</h6>
          <p className="project-description">
            The code base for this website. Built using the MERN stack and hosted on Heroku. The repo can be found{" "}
            <a className="text-info" href="https://github.com/MikamiHero/mikamihero-website">
              here.
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Programming;
