const joi = require("joi");

const validateStudent = async (req, res, next) => {
  const createSchema = await joi.object().keys({
    firstName: joi.string().required().messages({"any.required":"FirstName Required!"}),
    lastName: joi.string().required(),
    age: joi.number().required().messages({"any.required":"Age Required!"}),  
    contactNumber : joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required()
  });

  const { error } = createSchema.validate(req.body);
  console.log(error);
  if (error) {
    const { details } = error;
    res.status(404).json({ error: details });
  } else {
    next();
  }
};

module.exports = { validateStudent };



