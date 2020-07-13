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
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: config.,
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

// authenticated local strategy using username and passport. 'done' is verified function that gets invoked later
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const matchedUser = await User.findOne({ username });
      // no matching user
      if (!matchedUser) {
        return done(null, false);
      }
      // check if password is correct
      matchedUser.comparePassword(password, done);
    } catch (err) {
      // something went wrong with DB
      return done(err);
    }
  })
);
