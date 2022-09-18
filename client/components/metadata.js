import { Component } from "react";
import Head from "next/head";

export default class extends Component {
  render() {
    return (
      // The <Head> tag is a built-in Next.js component used for appending elements into the 'head' section of the HTML page.
      <Head>
        {/* This <meta> element gives us control over things like dimensions and scaling of the web page. */}
        <meta name="viewpoint" content="width-device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        {/* The <title> element helps us with things like the text in the browser tab, title for the page with search engines, etc */}
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.metaDescription} />
      </Head>
    );
  }
}
