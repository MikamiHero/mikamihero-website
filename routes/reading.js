const router = require("express").Router();
const Reading = require("../models/reading.model.js");
const moment = require("moment");
const passport = require("passport");

// Get the entire reading list
router.get("/", async (req, res) => {
  try {
    const readingList = await Reading.find();
    const parsedReadingList = readingList.map((r) => {
      // Formatting the read date so it looks a bit nicer
      const readDateParsed = moment(r.readDate).format("MMM-YYYY");
      return { ...r.toObject(), ...{ readDate: readDateParsed } };
    });
    return res.status(200).json({ success: true, reading: parsedReadingList });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Get a book via ID (if you know it)
router.get("/:id", async (req, res) => {
  try {
    const reading = await Reading.findById(req.params.id);
    return res.status(200).json({ success: true, reading });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Add a book
router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const title = req.body.title;
    const authors = req.body.authors;
    const readDate = moment.utc(req.body.readDate, "DD-MMM-YYYY").format();
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const review = req.body.review;
    const bookCoverURL = req.body.bookCoverURL;

    const newReading = new Reading({
      title,
      authors,
      readDate,
      isbn,
      genre,
      rating,
      review,
      bookCoverURL,
    });

    const newReadingSaved = await newReading.save();
    return res.status(200).json({ sucess: true, reading: newReadingSaved });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Edit a book via id
router.put("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const reading = await Reading.findById(req.params.id);
    if (!reading) {
      return res.status(400).json({ success: true, message: "No reading found" });
    }

    reading.title = req.body.title;
    reading.authors = req.body.authors;
    reading.readDate = moment.utc(req.body.readDate, "DD-MMM-YYYY").format();
    reading.isbn = req.body.isbn;
    reading.genre = req.body.genre;
    reading.rating = req.body.rating;
    reading.review = req.body.review;
    reading.bookCoverURL = req.body.bookCoverURL;

    const updatedReading = await reading.save();
    return res.status(200).json({ sucess: true, reading: updatedReading });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Delete a book via id
router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const reading = await Reading.findByIdAndDelete(req.params.id);
    return res.status(200).json({ sucess: true, message: "Reading deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
