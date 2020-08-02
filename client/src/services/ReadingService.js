import Axios from "axios";

// backend reading URLs
const getAllReadingURL = "/api/reading";
const getOneReadingURL = "/api/reading";
const searchReadingURL = "/api/reading";
const postNewReadingURL = "/api/reading";

export default {
  // get all books service
  getAllReading: async () => await Axios.get(getAllReadingURL),
  // get a single book service
  getOneReading: async (readingId) => await Axios.get(`${getOneReadingURL}/${readingId}`),
  // search for a single book service
  searchReading: async (readingValue) => await Axios.get(`${searchReadingURL}/search?searchValue=${readingValue}`),
  // create a new reading entry
  postReading: async (reading) => {
    // using 'fetch' b/c intercepting 401s w/ Axios is a pain :P
    const newReading = await fetch(postNewReadingURL, {
      method: "post",
      body: JSON.stringify(reading),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Passport authmatically appends 401 if something went wrong (i.e., not authed properly)
    if (newReading.status !== 401) {
      const newReadingJSON = await newReading.json();
      return newReadingJSON;
    }
    return { message: "Unauthorized", success: false, authError: true };
  },
};
