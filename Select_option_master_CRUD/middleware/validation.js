const joi = require("joi");

const validateSelectMaster = async (req, res, next) => {
  const insertSchema = await joi
    .object()
    .options({ abortEarly: false })
    .keys({
      name: joi
        .string()
        .required()
        .messages({ "any.required": "Name Required!!!" }),
      controllerType: joi
        .string()
        .required()
        .valid("dropdown", "checkbox", "radiobutton")
        .lowercase()
        .messages({ "any.required": "controllerType Required!!!" }),
      allowMultiple: joi
        .boolean()
        .required()
        .messages({ "any.required": "allowMultiple Required!!!" }),
      option_masters: joi.array().items(
        joi.object({
          optionKey: joi
            .string()
            .required()
            .messages({ "any.required": "optionKey Required!!!" }),
          selectId: joi
            .number()
            .required()
            .messages({ "any.required": "selectId Required!!!" }),
          optionValue: joi
            .string()
            .required()
            .messages({ "any.required": "optionValue Required!!!" }),
        })
      ),
    });

  const { error } = insertSchema.validate(req.body);

  if (error) {
    res.status(404).json({ error: error.message });
  } else {
    next();
  }
};

module.exports = { validateSelectMaster };
