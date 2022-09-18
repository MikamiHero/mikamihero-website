import { Component } from "react";

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
   /* 
    * This will get the statusCode from the response to determine what type of error it is. This gets passed down to this.props.statusCode
    * 
   */
  
  // NB: The 'static' keyword means that a property belongs to the class only but NOT for its instances.
  static getInitialProps({ req, res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return {
      statusCode: statusCode
    }
  }

  /*
   * If the error is 404, display the "page not found" error. Else, 500 error.
  */
  render() {
    return (
      <div className="layout=wrapper">
        <Header />
        <div className="error-container">
          {
            this.props.statusCode == 404 ?
              <>
                <h1> 404 - Page Not Found </h1>
                <p> The page you're looking for doesn't exist </p>
              </> :
              <>
                <h1> An error occurred </h1>
                <p> Please try reloading the page! </p>
              </>
          }
        </div>
        <Footer />
      </div>
    )
  }
}
