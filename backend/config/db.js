const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected successfully");
  } catch (e) {
    console.log("error while connecting the database", e);
  }
};

module.exports = connectDatabase;
