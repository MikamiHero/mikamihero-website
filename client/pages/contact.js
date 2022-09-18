import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";

import Metadata from "../components/metadata.js";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Metadata
          title="Contact | MikamiHero"
          metaDescription="Feel free to contact me via email if you have any comments, suggestions, or simply wish to say hello!"
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>
              Thank you for wanting to get in contact with me. I do try to keep
              my digital footprint relatively small, so you won't find me on
              social media. The best way to get in contact with me is either:
            </p>
            <ul>
              <li>
                <strong>Email</strong>: mikamihero 'at' proton.me
              </li>
              <li>
                <strong>GitHub</strong>:{" "}
                <a href="https://github.com/mikamihero">Stalking my repo.</a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
