import { Component } from "react";

import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

import Metadata from "../../components/metadata.js";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Metadata
          title="Blog | MikamiHero"
          metaDescription="A list of all the blog posts on Mikami's website"
        />
        <Header />
        <div className="blog-posts-container">
          <h1>Blog posts</h1>
          <div className="blog-posts-list">
            {/* These two are <a></a> tags are placeholders for now */}
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
