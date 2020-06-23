const router = require("express").Router();
const Experience = require("../models/experience.model");
const { sortDescByKey } = require("../utils/misc");
const { dateDiff } = require("../utils/date");
const moment = require("moment");

// Return all work experience entries
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    // Sort work experience in desc order of startDate
    const sortedExperiences = sortDescByKey({ objArr: experiences, key: "startDate" });
    const sortedExperienceDateParsed = sortedExperiences.map((se) => {
      const startDateParsed = moment(se.startDate).format("MMM-YYYY");
      const endDateParsed = moment(se.endDate).format("MMM-YYYY");
      const duration = dateDiff({ startDate: se.startDate, endDate: se.endDate });
      return { ...se.toObject(), ...{ startDate: startDateParsed, endDate: endDateParsed, duration } };
    });
    return res.status(200).json({ experience: sortedExperienceDateParsed });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Retrieve a single work experience entry
router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    return res.status(200).json({ experience: experience });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Update single work experience entry
router.put("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(400).json({ message: "No experience to update" });
    }

    experience.company = req.body.company;
    experience.positin = req.body.position;
    experience.startDate = req.body.startDate;
    experience.endDate = req.body.endDate;
    experience.location = req.body.location;
    experience.description = req.body.description;

    const updatedExperience = await experience.save();
    return res.status(200).json({ experience: updatedExperience });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Add new work experience entry
router.post("/add", async (req, res) => {
  try {
    const company = req.body.company;
    const position = req.body.position;
    // TODO: Date formatting
    const startDate = moment.utc(req.body.startDate, "DD-MMM-YYYY").format();
    const endDate = moment.utc(req.body.endDate, "DD-MMM-YYYY").format();
    const location = req.body.location;
    const description = req.body.description;

    const newExperience = new Experience({ company, position, startDate, endDate, location, description });

    const newExperienceSaved = await newExperience.save();
    return res.status(200).json({ status: 200, message: "Experience added!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Delete a single work experience entry
router.delete("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: 200, message: "Experience removed!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

module.exports = router;
