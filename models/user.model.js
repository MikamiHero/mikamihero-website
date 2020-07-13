const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["moderator", "admin"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose's version of middleware. For us, hash password before saving user
// Also need to use function () instead of () => because we want access 'this'
userSchema.pre("save", function (next) {
  // Don't need to re-hash the password if it's already been hashed
  if (!this.isModified("password")) {
    return next();
  }
  // Else, hash
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) {
      return next(err);
    }
    this.password = passwordHash;
    next();
  });
});

// Comparing the passwords if someone tries to authenticate
userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
      return cb(null, this);
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
