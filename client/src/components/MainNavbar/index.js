import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

// importing stylesheet and other assets
import "./style.css";
import MikamiHeroLogo from "../../assets/img/MikamiHeroLogo.png";

const MainNavbar = (props) => {
  const { location } = props;
  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Navbar.Brand>
        <img src={MikamiHeroLogo} className="logo d-inline-block align-top"></img> MikamiHero
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="m-auto" activeKey={location.pathname}>
          <NavLink className="custom" href="/">
            Home
          </NavLink>
          <NavLink href="/cv">CV</NavLink>
          <NavLink disabled href="/blog">
            Blog
          </NavLink>
          <NavLink href="/reading">Reading</NavLink>
          <NavLink disabled href="/twitch">
            Twitch
          </NavLink>
          <NavLink href="/programming">Programming</NavLink>
          <NavLink disabled href="/math">
            Math
          </NavLink>
          <NavLink disabled href="/ddr">
            DDR
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
