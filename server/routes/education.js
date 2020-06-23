const router = require("express").Router();
const Education = require("../models/education.model");
const { sortDescByKey } = require("../utils/misc");
const { dateDiff } = require("../utils/date");
const moment = require("moment");

// Return all education entries
router.get("/", async (req, res) => {
  try {
    const educations = await Education.find();
    // Sorting education by date completed (desc)
    const sortedEducations = sortDescByKey({ objArr: educations, key: "endDate" });
    const sortedEducationDateParsed = sortedEducations.map((se) => {
      const startDateParsed = moment(se.startDate).format("MMM-YYYY");
      const endDateParsed = moment(se.endDate).format("MMM-YYYY");
      const duration = dateDiff({ startDate: se.startDate, endDate: se.endDate });
      return { ...se.toObject(), ...{ startDate: startDateParsed, endDate: endDateParsed, duration } };
    });
    return res.status(200).json({ education: sortedEducationDateParsed });
  } catch (err) {
    return res.status(400).json(`Error: ${err}`);
  }
});

// Retrieve a single education entry
router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    return res.status(200).json({ education: education });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Update single education entry
router.put("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(400).json({ message: "No education to update" });
    }

    education.institution = req.body.institution;
    education.qualification = req.body.qualification;
    education.startDate = req.body.startDate;
    education.endDate = req.body.endDate;
    education.location = req.body.location;
    education.finalGrade = req.body.finalGrade;
    education.extraNotes = req.body.extraNotes;

    const updatedEducation = await education.save();
    return res.status(200).json({ education: updatedEducation });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Add new education entry
router.post("/add", async (req, res) => {
  try {
    const institution = req.body.institution;
    const qualification = req.body.qualification;
    const startDate = moment.utc(req.body.startDate, "DD-MMM-YYYY").format();
    const endDate = moment.utc(req.body.endDate, "DD-MMM-YYYY").format();
    const location = req.body.location;
    const finalGrade = req.body.finalGrade;
    const extraNotes = req.body.extraNotes;

    const newEducation = new Education({
      institution,
      qualification,
      startDate,
      endDate,
      location,
      finalGrade,
      extraNotes,
    });

    const newEducationSaved = await newEducation.save();
    return res.status(200).json({ status: 200, message: "Education added!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Delete a single education entry
router.delete("/:id", async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: 200, message: "Education removed!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

module.exports = router;
