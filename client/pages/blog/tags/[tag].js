import { Component } from "react";

import Header from "../../../components/header.js";
import Footer from "../../../components/footer.js";

import Metadata from "../../../components/metadata.js";

export default class extends Component {
  // getInitialProps() will run before loading the content of the page (i.e., enable server-side rendering)
  static async getInitialProps({ query }) {
    return {
      tag: query.tag,
    };
  }

  render() {
    return (
      <div className="layout-wrapper">
        <Metadata
          title={`Blogs tagged as "${this.props.tag}" | MikamiHero`}
          metaDescription={`All blogs tagged as "${this.props.tag}".`}
        />
        <Header />
        <div className="blog-posts-container">
          <h1>
            Blog posts tagged as <u>{this.props.tag}</u>
          </h1>
          <div className="blog-posts-list">
            <a href="/blog/post-title">
              <div className="blog-posts-list-item">
                <div className="blog-posts-thumbnail">
                  <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png" />
                </div>
                <div className="blog-posts-list-item-title-and-date">
                  <h2>Your Blog Post Title</h2>
                  <div className="blog-posts-list-item-date">
                    <span>5/1/2020</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
