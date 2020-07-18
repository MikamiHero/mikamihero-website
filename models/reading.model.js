const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const readingSchema = new Schema(
  {
    title: { type: String, required: true },
    authors: { type: String, required: true },
    readDate: { type: Date, required: true },
    isbn: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: false },
    review: { type: String, required: false },
    bookCoverURL: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Reading = mongoose.model("Reading", readingSchema);

module.exports = Reading;
