import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Containers
import Home from "./containers/Home";
import CV from "./containers/CV";
import Blog from "./containers/Blog";
import Reading from "./containers/Reading";
import Programming from "./containers/Programming";
import Contact from "./containers/Contact";
import ThankYou from "./containers/ThankYou";
import ErrorPage from "./containers/ErrorPage";

// Main components
import MainNavbar from "./components/MainNavbar";

// Enables us to set active highlighted tab in navbar
const NavbarWithRouter = withRouter(MainNavbar);

class App extends React.Component {
  render() {
    //JSX
    return (
      <Router>
        <div className="App">
          <NavbarWithRouter />
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/cv" exact component={CV} />
            <Route exact path="/blog" exact component={Blog} />
            <Route exact path="/reading" exact component={Reading} />
            <Route exact path="/programming" exact component={Programming} />
            <Route exact path="/contact" exact component={Contact} />
            <Route exact path="/thankyou" exact component={ThankYou} />
            <Route exact path="/error" exact component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
