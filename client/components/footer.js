import { Component } from "react";

export default class extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-bottom-msg">
          <p>
            Unless otherwise noted, all code is free to use under the MIT
            License.
          </p>
        </div>
      </footer>
    );
  }
}
