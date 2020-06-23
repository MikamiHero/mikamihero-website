import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Stylesheet and assets
import "./style.css";
import AboutMePhoto from "../../assets/img/AboutMePhoto.jpg";

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Image src={AboutMePhoto} rounded fluid className="about-me-img" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <h5 className="h5 text-center">G'day!</h5>
          <p>
            My name is Ray Li and welcome to my slice of internet real estate. This is really just a hub for things my
            CV, blog, Twitch channel info, books that I've read, DDR achievements, and programming tidbits. Basically
            stuff that I should've consolidated years ago!
          </p>
          <p>
            I was born in China and honestly don't remember much of it. I came to Australia when I was ~3 and grew up in{" "}
            <a href="https://en.wikipedia.org/wiki/Wollongong">Wollongong</a>, NSW, Australia. I completed both a
            BMathAdvHons (Class 1) and a PhD (Mathematical Finance) from the{" "}
            <a href="https://www.uow.edu.au/">University of Wollongong.</a> In short, I went to uni for too long (~9
            years).
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <p>
            After being swallowed, beaten, and spat out by the tertiary education system (and becoming greatly
            disillusioned about being an academic), I started working as a professional software developer in 2017. My
            employment history includes companies like <a href="https://www.martinit.com.au/">Martin IT</a> and{" "}
            <a href="https://www.tcorp.nsw.gov.au/html/">NSW Treasury Corporation</a>. I am currently a teaching
            assistant in statistics at <a href="https://www.westernsydney.edu.au/">Western Sydney University</a>.
          </p>
          <p>
            Beyond my professional life, I am also:
            <ul>
              <li>a regional-level badminton player.</li>
              <li>
                a <a href="https://en.wikipedia.org/wiki/Speedrun">speedrunner</a> who streams on{" "}
                <a href="https://www.twitch.tv/MikamiHero">Twitch</a>.
              </li>
              <li>an avid reader (mainly science fiction and fantasy).</li>
            </ul>
            I don't have any social media except <a href="https://twitter.com/MikamiHero">Twitter</a>. If you need/wish
            to contact me about something, please use the contact button below as I rarely check Twitter DMs.
          </p>
          <hr className="my-4" />
          <p>If you wish to contact me about something, please click the button below.</p>
          <Button variant="dark" size="lg">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
