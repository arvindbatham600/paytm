const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("in transaction router");
  return res.send("Hi");
});

module.exports = router;
