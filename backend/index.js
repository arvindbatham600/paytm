const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");

const app = express();
// adding cors
app.use(cors());

// middleware for parsing the JSON bodies
app.use(express.json());

// middleware for parsing the URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// all router are in mainRouter
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
