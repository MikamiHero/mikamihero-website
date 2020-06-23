const config = require("./config.json");

// Config taken from environment variables
config.nodeEnv = process.env.NODE_ENV;

// Config taken from config.json file
config.mongodbURI = config[config.nodeEnv].mongodbURI;
config.mailGunDomain = config[config.nodeEnv].mailGunDomain;
config.mailGunAPIKey = config[config.nodeEnv].mailGunAPIKey;
config.mailGunToEmail = config[config.nodeEnv].mailGunToEmail;

module.exports = config;
