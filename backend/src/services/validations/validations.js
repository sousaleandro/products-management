import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
  description: Joi.string().required().allow(''),
  price: Joi.number().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required().allow(''),
  price: Joi.number().required(),
});

export const validateProduct = (product) => {
  const { error } = productSchema.validate(product);
  if (error) return { status: 'INVALID_DATA', data: error.details[0] };
};

export const validateUpdateProduct = (product) => {
  const { error } = updateProductSchema.validate(product);
  if (error) return { status: 'INVALID_DATA', data: error.details[0] };
};
