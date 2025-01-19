const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// adding cors
app.use(cors());

// adding body parser for  parsing of incoming request bodies, such as JSON and URL-encoded data
app.use(bodyParser.json()); // // Middleware to parse JSON bodies
  
app.use(bodyParser.urlencoded({ extended: true })); // // Middleware to parse URL-encoded bodies

// all router are in mainRouter
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
