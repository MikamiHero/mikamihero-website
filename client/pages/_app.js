/*
    The purpose of this file is to initialize each page of the web app
    and allow us to simply add a reference to the CSS in /styles
    and have them applied globally across the entire app
*/
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
