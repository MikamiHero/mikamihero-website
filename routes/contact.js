const router = require("express").Router();
const Contact = require("../models/contact.model");
const { sendEmail } = require("../utils/handleEmail");

// Save the contact form details
router.post("/send", async (req, res) => {
  try {
    // Send off the email
    const sendEmailAboutContact = await sendEmail({
      email: req.body.email,
      subject: `Website contact: ${req.body.name} wishes to contact you`,
      message: req.body.message,
    });
    // If email fired off successfully, save it to DB
    const newContactForm = new Contact(req.body);
    const newContactFormSaved = await newContactForm.save();
    return res.status(200).json({ message: "Contact form details saved and email saved" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Sorry, internal server error" });
  }
});

module.exports = router;
