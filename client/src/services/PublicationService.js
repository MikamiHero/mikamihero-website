import Axios from "axios";

// backend publication URLs
const baseURL = "/api/publication";
const getAllPublicationURL = `${baseURL}/`;

export default {
  // get all publications service
  getAllPublication: async () => await Axios.get(getAllPublicationURL),
};
