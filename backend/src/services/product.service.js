import productsModel from '../models/product.model.js';
import { validateProduct, validateUpdateProduct } from './validations/validations.js';

const getAll = async () => {
  const products = await productsModel.getAll();
  return { status: 'SUCCESSFUL', data: products };
};

const getByCode = async (code) => {
  const product = await productsModel.getByCode(code);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

const create = async (data) => {
  const error = validateProduct(data);
  if (error) {
  return {
    status: error.status,
    data: error.data.message,
  };
  }

  await productsModel.create(data);
  const product = await productsModel.getByCode(data.code);
  return { status: 'CREATED', data: product };
};

const update = async (code, data) => {
  const product = await productsModel.getByCode(code);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  const error = validateUpdateProduct(data);
  if (error) {
    return {
      status: error.status,
      data: error.data.message,
    };
  }
  
  const updatedProduct = await productsModel.update(code, data);
  return { status: 'SUCCESSFUL', data: updatedProduct };
};

const exclude = async (code) => {
  const product = await productsModel.getByCode(code);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  await productsModel.exclude(code);
  return { status: 'DELETED', data: null };
};

export default {
  getAll,
  getByCode,
  create,
  update,
  exclude,
};
