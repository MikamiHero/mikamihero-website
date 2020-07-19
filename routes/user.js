const router = require("express").Router();
const passport = require("passport");
const config = require("../config");
const passportConfig = require("../utils/passport");
const User = require("../models/blog.model");
const jwt = require("jsonwebtoken");

// payload only has the issuer and user's primary key. Signed using jwt secret set in app's config
const signToken = ({ userID }) =>
  jwt.sign({ iss: config.jwtIssuer, sub: userID }, config.jwtSecret, { expiresIn: "1h" });

router.post("/login", passport.authenticate("local", { session: false }), async (req, res, next) => {
  // isAuthenticated provided by passport by default (i.e., user was able to login successfully)
  if (req.isAuthenticated()) {
    // passport is attaching the 'user' if authenticated (check local strategy in utils/passport.js)
    const { _id, username, role } = req.user;
    // Sign the token via JWT sign
    const token = signToken({ userID: _id });
    // httpOnly to prevent client-side cross-site scripting attacks; sameSite cross-site request forgery attacks
    await res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    // Return if all is well
    return res.status(200).json({ isAuthentiated: true, user: { username, role } });
  }
});

router.get("/logout", passport.authenticate("jwt", { session: false }), async (req, res, next) => {
  await res.clearCookie("access_token");
  return res.status(200).json({ user: { username: "", role: "" }, success: true });
});

router.get("/admin", passport.authenticate("jwt", { session: false }), async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ isAdmin: false, message: "You are NOT an admin." });
  }
  return res.status(200).json({ isAdmin: true, message: "You are an admin." });
});

// Client persistence (e.g., so state won't reset if someone logs in and ensures proper sync between frontend and backend)
router.get("/authenticated", passport.authenticate("jwt", { session: false }), async (req, res, next) => {
  // passport attaches the user
  const { username, role } = req.user;
  return res.status(200).json({ isAuthenticated: true, user: { username, role } });
});

module.exports = router;
