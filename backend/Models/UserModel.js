const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 320, // RFC 5321 allows up to 320 chars for emails
    lowercase: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Using regex for basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
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
const UserModel = mongoose.model("User", userSchema);

// export the model
module.exports = UserModel;
