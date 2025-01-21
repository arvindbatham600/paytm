const express = require("express");
const SignupValidation = require("../middlewares/SigninValidation")
const SignupHander = require("../controllers/SignupHandler");
const SigninValidation = require("../middlewares/SigninValidation");
const SigninHandler = require("../controllers/SigninHandler");
const router = express.Router();

// signup and signin router
router.post("/signup", SignupValidation, SignupHander); 
router.post("/signin", SigninValidation, SigninHandler )


module.exports = router;
