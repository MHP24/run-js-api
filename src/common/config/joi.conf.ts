import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  PORT: Joi.number().required(),
});
