const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const publicationSchema = new Schema(
  {
    authors: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: true },
    journal: { type: String, required: true },
    volume: { type: Number, required: false },
    number: { type: Number, required: false },
    pages: { type: String, required: true },
    doi: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;
