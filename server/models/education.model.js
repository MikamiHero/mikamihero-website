const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema(
  {
    institution: { type: String, required: true },
    qualification: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    finalGrade: { type: String, required: false },
    extraNotes: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
