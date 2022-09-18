import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";

import Metadata from "../components/metadata.js";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Metadata
          title="About Me | MikamiHero"
          metaDescription="Mikami is a software engineer who works in security."
        />
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>G'day!</h1>
            <p>
              I'm Mikami, a software engineer working in security based out in
              Sydney, NSW, Australia.
            </p>
            <p>
              I've never really had a hub to document my personal projects, so I
              decided to create this blog. It serves two purposes:
            </p>
            {/* I was getting a strange error about Hydration failed because the initial UI does not match what was rendered on the screen.
            Turns out, NextJS does not like having <p></p> tags wrapping divs, sections, etc (I guess that includes <ol></ol>).
            tl;dr - Order the elements properly? */}
            <ol>
              <li>
                Allows me to do writeups of fun challenges I believe are worth
                talking about (e.g., Hack the Box, CTFs).
              </li>
              <li>
                Develop something with the <code>MERN</code> stack.
              </li>
            </ol>
          </div>
          <div className="about-section">
            <h2>Projects:</h2>
            <ul>
              <li>
                <a href="https://github.com/MikamiHero/urghbot">Urghbot</a> - A
                Twitch chatbot that pretty much hates everything about life, and
                thinks 'ugh' is the appropriate response to it all. Written in{" "}
                <code>Node.js</code>.
              </li>
              <li>
                <a href="https://github.com/MikamiHero/mikamihero-website">
                  My website
                </a>{" "}
                - The creation of this blog/web app itself was motivated partly
                by me wanting to learn how to develop with the <code>MERN</code>{" "}
                stack effectively.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
