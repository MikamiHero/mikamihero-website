import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";

// provides us provider and consumer (i.e., consumer of global state)
export const AuthContext = createContext();

export default (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // boolean value to see if app is loaded or not
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  // children = components we want to wrap our AuthContext around (deconstructing props) that provides the global state
  return (
    <div>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        // The values we want to be able to be a global state (so user, isAuthenticated flag and the setters)
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
          {props.children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
