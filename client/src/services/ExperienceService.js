import Axios from "axios";

// backend experience URLs
const baseURL = "/api/experience";
const getAllExperienceURL = `${baseURL}/`;

export default {
  // get all experience service
  getAllExperience: async () => await Axios.get(getAllExperienceURL),
};
