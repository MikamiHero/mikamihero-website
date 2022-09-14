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

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
