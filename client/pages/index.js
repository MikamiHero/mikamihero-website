/*
    Next.js app looks for a /pages directory that holds
    all of our different paths for the our web app.
*/
import { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import Metadata from "../components/metadata";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        {/* NB: We need to ensure the Metadata component is placed at the topmost item on the page of the first layout-wrapper div */}
        <Metadata
          title="MikamiHero's Website"
          metaDescription="Mikami is a software engineer who works in security."
        />
        <Header />
        <div className="homepage-container">Hello world</div>
        <Footer />
      </div>
    );
  }
}
