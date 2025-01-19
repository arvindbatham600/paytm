const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("in main userRouter");
  return res.send("Hello");
});

module.exports = router;
