import Axios from "axios";

// backend education URLs
const baseURL = "/api/education";
const getAllEducationURL = `${baseURL}/`;

export default {
  // get all education service
  getAllEducation: async () => await Axios.get(getAllEducationURL),
};
