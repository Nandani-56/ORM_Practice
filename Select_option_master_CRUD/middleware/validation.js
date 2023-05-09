const { query } = require("express");
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
        joi
          .object({
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
          .required()
          .min(1)
      ),
    });

  const { error } = insertSchema.validate(req.body);

  if (error) {
    res.status(404).json({ error: error.message });
  } else {
    next();
  }
};

const validateReadData = async (req, res, next) => {
  const readSchema = await joi.object().options({ abortEarly: false }).keys({
    id: joi.number().required(),
  });

  const { errors } = readSchema.validate(req.query);

  if (errors) {
    res.status(404).json({ error: errors.message });
  } else {
    next();
  }
};
module.exports = { validateSelectMaster, validateReadData };


/*
09-05-2023

Technology : NodeJS

*Tasks*
Implemented Joi validation on select master and option master
Created Swagger Documentation for API 

*Learnings*
Read about joi validation 
How to validate a query string using joi validation
How to create swagger documentation for API 

*/
