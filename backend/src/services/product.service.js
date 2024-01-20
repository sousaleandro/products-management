import productsModel from '../models/products.model';

const getAll = async () => {
  const products = await productsModel.getAll();
  return { status: 'SUCCESSFUL', data: products };
};

const getByCode = async (code) => {
  // const errorId = validateId(id);
  // if (errorId) return { status: errorId.status, data: { message: 'Wrong id format' } };
  const product = await productsModel.getByCode(code);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

const create = async (data) => {
  // const error = validateProduct(name);
  // if (error) {
  // return {
  //   status: error.status,
  //   data: { message: '"name" length must be at least 5 characters long' },
  // };
  // }

  const productId = await productsModel.create(data);
  const product = await productsModel.getByCode(data.code);
  return { status: 'CREATED', data: product };
};

const update = async (data) => {
  // const errorId = validateId(id);
  // if (errorId) return { status: errorId.status, data: { message: 'Wrong id format' } };
  // const error = validateProduct(name);
  // if (error) {
  //   return {
  //     status: error.status,
  //     data: { message: '"name" length must be at least 5 characters long' },
  //   };
  // }

  const product = await productsModel.getByCode(code);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  
  const updatedProduct = await productsModel.update(data);
  return { status: 'SUCCESSFUL', data: updatedProduct };
};

const exclude = async (code) => {
  // const errorId = validateId(id);
  // if (errorId) return { status: errorId.status, data: { message: 'Wrong id format' } };
  // const product = await productsModel.getById(id);
  // if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  await productsModel.exclude(id);
  return { status: 'DELETED', data: null };
};

export default {
  getAll,
  getByCode,
  create,
  update,
  exclude,
};
