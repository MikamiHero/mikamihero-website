import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import App from "./App";

// see AuthContext.Provider in context/AuthContext
import AuthProvider from "./context/AuthContext";

Axios.defaults.withCredentials = true;

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
