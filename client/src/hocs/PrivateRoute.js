import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// destructuring props to get component and then renaming it 'Component' (required by React).
// roles is also destructured and everything else from props will be stored in 'rest'
const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        // If not authenticated, the user will be redirected to the login page from current location (e.g., trying to access a protected route)
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }}></Redirect>;
        }
        // If the user is authenticated but does NOT have the correct role (in this case, we're only checking admin), redirect to home page
        if (!roles.includes(user.role)) {
          return <Redirect to={{ pathname: "/", state: { from: props.location } }}></Redirect>;
        }
        // If the user is authenticated AND has the correct role, render out the component we've passed in the props
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
