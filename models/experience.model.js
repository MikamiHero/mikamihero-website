const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
