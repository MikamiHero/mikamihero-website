import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import App from "./App";
import AuthProvider from "./context/AuthContext";

Axios.defaults.withCredentials = true;

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
