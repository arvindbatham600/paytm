const mongoose = require("mongoose");

// connect mongodb url
// mongoose.connect("mongodb+srv://arvindbatham60:@cluster0.qph9o.mongodb.net/");

// create schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

// create model
const User = mongoose.model("User", userSchema);

// export the model
module.exports = {
  User,
};
