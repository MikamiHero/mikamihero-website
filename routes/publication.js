const router = require("express").Router();
const Publication = require("../models/publication.model");
const { sortDescByKey } = require("../utils/misc");

// Return all publication entries
router.get("/", async (req, res) => {
  try {
    const publications = await Publication.find();
    // Sort publicatins in desc order of publication year
    const sortedPublications = sortDescByKey({ objArr: publications, key: "year" });

    return res.status(200).json({ publication: sortedPublications });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Retrieve a single publication
router.get("/:id", async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    return res.status(200).json({ publication: publication });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Update a single publication
router.put("/:id", async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      return res.status(400).json({ message: "No publication to update" });
    }

    publication.authors = req.body.authors;
    publication.title = req.body.title;
    publication.year = req.body.year;
    publication.journal = req.body.journal;
    publication.volume = req.body.volume;
    publication.number = req.body.number;
    publication.pages = req.body.pages;
    publication.doi = req.body.doi;

    const updatedPublication = await publication.save();
    return res.status(200).json({ experience: updatedPublication });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Add new publication
router.post("/add", async (req, res) => {
  try {
    const authors = req.body.authors;
    const title = req.body.title;
    const year = req.body.year;
    const journal = req.body.journal;
    const volume = req.body.volume;
    const number = req.body.number;
    const pages = req.body.pages;
    const doi = req.body.doi;

    const newPublication = new Publication({ authors, title, year, journal, volume, number, pages, doi });

    const newPublicationSaved = await newPublication.save();
    return res.status(200).json({ status: 200, message: "Publication added!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

// Delete a single publication
router.delete("/:id", async (req, res) => {
  try {
    const publication = await Publication.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: 200, message: "Publication removed!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

module.exports = router;
