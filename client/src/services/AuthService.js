import Axios from "axios";

// backend auth URLs
const baseURL = "/api/user";
const loginURL = `${baseURL}/login`;
const logoutURL = `${baseURL}/logout`;
const isAuthenticatedURL = `${baseURL}/authenticated`;

export default {
  // login service
  login: async (user) => {
    // using 'fetch' b/c intercepting 401s w/ Axios is a pain :P
    const loggingIn = await fetch(loginURL, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Passport authmatically appends 401 if something went wrong with auth
    if (loggingIn.status !== 401) {
      const loginJSON = await loggingIn.json();
      return loginJSON;
    }
    return { isAuthenticated: false, user: { username: "", role: "" } };
  },
  // logout service
  logout: async () => await Axios.get(logoutURL),
  // Persist authentication (sync backends and frontends just in case React app is closed, for example)
  isAuthenticated: async () => {
    // using 'fetch' b/c intercepting 401s w/ Axios is again, a pain :P
    const isAuth = await fetch(isAuthenticatedURL);
    // Passport automatically appends 401 status code if we are not authenticated
    if (isAuth.status !== 401) {
      const isAuthJSON = await isAuth.json();
      return isAuthJSON;
    }
    return { isAuthenticated: false, user: { username: "", role: "" } };
  },
};
