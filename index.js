// packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

// local imports
const config = require("./config");

// initialisation
const app = express();
const port = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan("tiny"));

// Application configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB setup
mongoose.connect(process.env.MONGODB_URI || config.mongodbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// DB open listener
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const blogRoute = require("./routes/blog");
const contactRoute = require("./routes/contact");
const educationRoute = require("./routes/education");
const experienceRoute = require("./routes/experience");
const publicationRoute = require("./routes/publication");
app.use("/blog", blogRoute);
app.use("/contact", contactRoute);
app.use("/education", educationRoute);
app.use("/experience", experienceRoute);
app.use("/publication", publicationRoute);

// Checking if we're on prod (e.g., need to build)
if (config.nodeEnv === "production") {
  app.use(express.static("client/build"));
}

// Listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
