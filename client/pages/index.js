/*
    Next.js app looks for a /pages directory that holds
    all of our different paths for the our web app.
*/
import { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="homepage-container">Hello world</div>
        <Footer />
      </div>
    );
  }
}
