const zod = require("zod");

// creating zod schema
const userSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

const InputValidation = (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    // validate the inputs
    const validate = userSchema.safeParse({
      email: email,
      password: password,
    });
    if (validate.success) {
      next();
    } else {
      return res.status(500).send({
        success: false,
        message: "Invalid inputs",
      });
    }

    console.log("validity", validate);
  } catch (e) {
    console.log("error", e);
    return res.send("getting error while input validation");
  }
};

module.exports = InputValidation;
