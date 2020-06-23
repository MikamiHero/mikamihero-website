// Define a config object to be exported
const config = {};

// Config taken from environment variables
config.nodeEnv = process.env.NODE_ENV;

// Config taken from config.json file
config.mongodbURI = process.env.MONGODB_URI;
config.mailGunDomain = process.env.MAILGUN_DOMAIN;
config.mailGunAPIKey = process.env.MAILGUN_API_KEY;
config.mailGunToEmail = process.env.MAILGUN_TO_EMAIL;

module.exports = config;
