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
// for checking the backend
app.get("/", (req, res) => {
  return res.status(200).send({
    message: "paytm backend working...",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
