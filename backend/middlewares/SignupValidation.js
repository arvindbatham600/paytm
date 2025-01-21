const zod = require("zod");

// create zod schema -->
const userSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

const SignupValidation = (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // validate the inputs
    const validate = userSchema.safeParse({
      email,
      password,
      firstName,
      lastName,
    });

    if (validate.success) {
      next();
    } else {
      return res.status(500).send({
        success: false,
        message: "Invalid inputs",
      });
    }
  } catch (e) {
    return res.send("getting error while input validation");
  }
};

module.exports = SignupValidation;
