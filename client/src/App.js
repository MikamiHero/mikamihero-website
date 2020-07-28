import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Containers
import Home from "./containers/Home";
import CV from "./containers/CV";
import Blog from "./containers/Blog";
import Reading from "./containers/Reading";
import NewReading from "./containers/NewReading";
import SingleReading from "./containers/SingleReading";
import Programming from "./containers/Programming";
import Contact from "./containers/Contact";
import Login from "./containers/Login";
import ThankYou from "./containers/ThankYou";
import ErrorPage from "./containers/ErrorPage";
import Admin from "./containers/Admin";

// Main components
import MainNavbar from "./components/MainNavbar";

// Higher-order components (HOCs - e.g., PrivateRoute)
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";

// Enables us to set active highlighted tab in navbar
const NavbarWithRouter = withRouter(MainNavbar);

function App() {
  //JSX
  return (
    <Router>
      <div className="App">
        <NavbarWithRouter />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/cv" exact component={CV} />
          <Route exact path="/blog" exact component={Blog} />
          <PrivateRoute path="/reading/add" roles={["admin"]} component={NewReading} />
          <Route exact path="/reading/" exact component={Reading} />
          <Route exact path="/reading/:readingId" exact component={SingleReading} />
          <Route exact path="/programming" exact component={Programming} />
          <Route exact path="/contact" exact component={Contact} />
          <UnPrivateRoute path="/login" roles={["admin"]} component={Login} />
          <Route exact path="/thankyou" exact component={ThankYou} />
          <Route exact path="/error" exact component={ErrorPage} />
          <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
