import Axios from "axios";

// backend auth URLs
const loginURL = "/user/login";
const logoutURL = "/user/logout";
const isAuthenticatedURL = "/user/authenticated";

export default {
  // login service
  login: async (user) => await Axios.post(loginURL, JSON.stringify(user)),
  // logout service
  logout: async () => await Axios.get(logoutURL),
  // Persist authentication (sync backends and frontends just in case React app is closed, for example)
  isAuthenticated: async () => {
    // using 'fetch' b/c intercepting 401s w/ Axios is a pain :P
    const isAuth = await fetch(isAuthenticatedURL);
    // Passport automatically appends 401 status code if we are not authenticated
    if (isAuth.status !== 401) {
      return isAuth;
    }
    return { isAuthenticated: false, user: { username: "", role: "" } };
  },
};
