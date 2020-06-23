const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const config = require("../config");

// Config for mailgun domain and api key
const apiKey = config.mailGunAPIKey;
const domain = config.mailGunDomain;
const toEmail = config.mailGunToEmail;

// setting up the transpoerter
const transporter = nodemailer.createTransport(
  mailGun({
    auth: {
      api_key: apiKey,
      domain: domain,
    },
  })
);

// function to send out the email
const sendEmail = async ({ email, subject, message }) =>
  transporter.sendMail({
    from: email,
    to: toEmail,
    subject: subject,
    text: message,
  });

module.exports = { sendEmail };
