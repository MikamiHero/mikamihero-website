const config = require("./config.json");

// Config taken from environment variables
config.nodeEnv = process.env.NODE_ENV;

// Config taken from config.json file
config.mongodbURI = config[config.nodeEnv].mongodbURI || process.env.MONGODB_URI;
config.mailGunDomain = config[config.nodeEnv].mailGunDomain || process.env.MAILGUN_DOMAIN;
config.mailGunAPIKey = config[config.nodeEnv].mailGunAPIKey || process.env.MAILGUN_API;
config.mailGunToEmail = config[config.nodeEnv].mailGunToEmail || process.env.MAILGUN_TOEMAIL;

module.exports = config;
