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

// Mongoose's version of middleware. For us, hash password before saving user (pre-hook)
// Also need to use function () instead of () => because we want access 'this'
userSchema.pre("save", async function (next) {
  const user = this;
  // Don't need to re-hash the password if it's already been hashed
  if (!user.isModified("password")) {
    return next();
  }
  // Else, hash
  try {
    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;
    next();
  } catch (err) {
    return next(err);
  }
});

// Comparing the passwords if someone tries to authenticate
userSchema.methods.comparePassword = async function (password) {
  const user = this;
  try {
    const compare = await bcrypt.compare(password, user.password);
    return compare;
  } catch (err) {
    return err;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
