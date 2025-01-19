const express = require("express");
const InputValidation = require("../middlewares/InputValidation");
const SignupHander = require("../controllers/SignupHandler")
const router = express.Router();

// signup router

router.post("/signup", InputValidation, SignupHander); 

module.exports = router;
