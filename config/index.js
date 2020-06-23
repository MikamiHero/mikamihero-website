const config = require("./config.json");

// Config taken from environment variables
config.nodeEnv = process.env.NODE_ENV;

// Config taken from config.json file
config.mongodbURI = process.env.MONGODB_URI || config[config.nodeEnv].mongodbURI;
config.mailGunDomain = process.env.MAILGUN_DOMAIN || config[config.nodeEnv].mailGunDomain;
config.mailGunAPIKey = process.env.MAILGUN_API_KEY || config[config.nodeEnv].mailGunAPIKey;
config.mailGunToEmail = process.env.MAILGUN_TO_EMAIL || config[config.nodeEnv].mailGunToEmail;

module.exports = config;
