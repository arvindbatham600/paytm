const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

const app = express();
// adding cors
app.use(cors());

// env configuration
dotenv.config();

// middleware for parsing the JSON bodies
app.use(express.json());
// middleware for parsing the URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// connect database
connectDatabase();

// all router are in mainRouter
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
