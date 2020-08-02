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
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Get books via query
router.get("/search", async (req, res) => {
  try {
    const readingSearchValue = req.query.searchValue;
    // If the search value is empty, return empty array
    if (!readingSearchValue || readingSearchValue === "") {
      return res.status(200).json({ success: true, reading: [] });
    }
    const reading = await Reading.find({ title: { $regex: `^${readingSearchValue}`, $options: "i" } });
    return res.status(200).json({ success: true, reading });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Get a book via ID (if you know it)
router.get("/:id", async (req, res) => {
  try {
    const reading = await Reading.findById(req.params.id);
    return res.status(200).json({ success: true, reading });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Add a book
router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const title = req.body.title;
    const authors = req.body.authors;
    const readDate = moment(req.body.readDate).format("DD-MMM-YYYY");
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const review = req.body.review;
    const bookCoverURL = req.body.bookCoverURL;

    // Pre-check if ISBN is a number or not
    if (isNaN(isbn)) {
      return res.status(400).json({ success: false, message: "ISBN is not a number" });
    }

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
    return res.status(200).json({ success: true, message: "Reading added successfully", reading: newReadingSaved });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
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
    reading.readDate = moment(req.body.readDate).format("DD-MMM-YYYY");
    reading.isbn = req.body.isbn;
    reading.genre = req.body.genre;
    reading.rating = req.body.rating;
    reading.review = req.body.review;
    reading.bookCoverURL = req.body.bookCoverURL;

    const updatedReading = await reading.save();
    return res.status(200).json({ sucess: true, reading: updatedReading });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Delete a book via id
router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const reading = await Reading.findByIdAndDelete(req.params.id);
    return res.status(200).json({ sucess: true, message: "Reading deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
