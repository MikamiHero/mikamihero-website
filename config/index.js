// Define a config object to be exported
const config = {};

// Config taken from environment variables
config.nodeEnv = process.env.NODE_ENV;

// mongoDB config
config.mongodbURI = process.env.MONGODB_URI;

// MailGun config
config.mailGunDomain = process.env.MAILGUN_DOMAIN;
config.mailGunAPIKey = process.env.MAILGUN_API_KEY;
config.mailGunToEmail = process.env.MAILGUN_TO_EMAIL;

// Goodreads config
config.goodreadsAPIKey = process.env.GOODREADS_API_KEY;
config.goodreadsSecret = process.env.GOODREADS_API_SECRET;

// JWT/authorization config
config.jwtSecret = process.env.JWT_SECRET;

module.exports = config;
