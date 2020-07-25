import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// destructuring props to get component and then renaming it 'Component' (required by React).
// roles is also destructured and everything else from props will be stored in 'rest'
const UnPrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        // If the user IS authenticated and trying to access a route unnecessarily, redirect to home page (e.g., redirect if they're auth'ed but try to access login page)
        if (isAuthenticated) {
          return <Redirect to={{ pathname: "/", state: { from: props.location } }}></Redirect>;
        }
        // Else if they are not auth'ed, render out the component we've passed in the props (e.g., render out login page)
        return <Component {...props} />;
      }}
    />
  );
};

export default UnPrivateRoute;
