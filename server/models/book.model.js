const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    authors: { type: String, required: true },
    readDate: { type: Date, required: true },
    isbn: { type: String, required: true },
    rating: { type: Number, required: false },
    review: { type: String, required: false },
    coverFileName: { type: String, required: false },
    coverFileImageData: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
