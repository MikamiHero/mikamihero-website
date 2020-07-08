import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// stylesheets and other assets
import "./style.css";
import OracleBotDemo from "../../assets/img/OracleBotDemo.png";
import WebsiteDemo from "../../assets/img/WebsiteDemo.png";

// GitHub URL
const gitHubURL = "https://github.com/MikamiHero";

const Programming = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="programming-heading ">programming</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p>
            Below, you'll find an assortment of some of my coding projects. If you would like a more exhaustive list,
            please visit my <a href={gitHubURL}>GitHub</a> as some projects may be more active than others depending on
            my current interests. Please note these are <b>personal</b> endeavours and have no bearing towards any
            professional work I may be engaged in.
          </p>
        </Col>
      </Row>
      <Row className="programming-project">
        <img src={OracleBotDemo} className="programming-project-img" />

        <div className="programming-project-content">
          <h1 className="text-center">Oracle</h1>
          <h6 className="text-warning text-center">Discord bot</h6>
          <p>
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
        </div>
        <href />
      </Row>
      <Row className="programming-project">
        <img src={WebsiteDemo} className="programming-project-img" />
        <div className="programming-project-content">
          <h1 className="text-center">This website</h1>
          <h6 className="text-info text-center">Web development</h6>
          <p>
            The code base for this website. Built using the MERN stack and hosted on Heroku. The repo can be found{" "}
            <a className="text-info" href="https://github.com/MikamiHero/mikamihero-website">
              here.
            </a>
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Programming;
