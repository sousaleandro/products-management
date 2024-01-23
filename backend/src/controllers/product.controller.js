import productService from '../services/product.service.js';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';

const getAll = async (_req, res) => {
  const { status, data } = await productService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

const getByCode = async (req, res) => {
  const { code } = req.params;
  const { status, data } = await productService.getByCode(code);
  res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { name, code, description, price } = req.body;
  const { status, data } = await productService.create({ name, code, description, price });
  res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { code } = req.params;
  const { name, description, price } = req.body;
  const { status, data } = await productService.update(code, { name, description, price });
  res.status(mapStatusHTTP(status)).json(data);
};

const exclude = async (req, res) => {
  const { code } = req.params;
  const { status, data } = await productService.exclude(code);
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getAll,
  getByCode,
  create,
  update,
  exclude,
};
