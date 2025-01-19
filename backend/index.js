const express = require("express");
const mainRouter = require("./routes/index");

const app = express();

// all router are in mainRouter
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
