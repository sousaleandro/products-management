import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAll = async (_req, res) => {
  const { status, data } = await productService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

const getByCode = async (req, res) => {
  const { code } = req.params;
  const { status, data } = await productService.getById(code);
  res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { name, code, description, pice } = req.body;
  const { status, data } = await productService.create({ name, code, description, pice });
  res.status(mapStatusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { name, code, description, pice } = req.body;
  const { status, data } = await productService.update({ name, code, description, pice });
  res.status(mapStatusHTTP(status)).json(data);
};

const exclude = async (req, res) => {
  const { code } = req.body;
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
