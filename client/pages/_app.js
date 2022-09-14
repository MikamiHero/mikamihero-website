/*
    The purpose of this file is to initialize each page of the web app
    and allow us to simply add a reference to the CSS in /styles
    and have them applied globally across the entire app
*/

// This CSS is for the layout of the app
import "../styles/layout.css";

// CSS for components (e.g., header)
import "../styles/components/header.css";
import "../styles/components/footer.css";

// CSS for specific pages (e.g., homepage)
import "../styles/pages/homepage.css";
import "../styles/pages/blog-posts.css";
import "../styles/pages/post.css";
import "../styles/pages/contact.css";
import "../styles/pages/about.css";

// External import
import "../styles/prismjs.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
