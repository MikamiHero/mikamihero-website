const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/user.model");
const config = require("../config");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// authorization middleware (e.g., protect routes) to extract the token from the request that gets set in the cookie of the client's browser when authenticated
// to refer to this middleware, we use passport.authenticate('jwt', {session: false})
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: config.jwtSecret,
    },
    async (payload, done) => {
      try {
        // payload.sub is the primary key of the user
        const matchedUser = await User.findById({ _id: payload.sub });
        if (!matchedUser) {
          // no user with this primary key
          return done(null, false);
        }
        // must be a matched user that's already authenticated (else how will they have a JWT token?)
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

// login/authenticated local strategy using username and passport. 'done' is verified function that gets invoked later
// to refer to this middleware, we use passport.authenticate('local', {session: false})
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      // no matching user
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      // check if password is correct
      const correctPassword = await user.comparePassword(password);
      if (!correctPassword) {
        return done(null, false, { message: "Password incorrect" });
      }
      // Send user info to the next middleware
      return done(null, user, { message: "Logged in successfully" });
    } catch (err) {
      // something went wrong with DB
      return done(err);
    }
  })
);
