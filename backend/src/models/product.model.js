import connection from './connection.js';

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getByCode = async (code) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE code = ?', [code]);
  return product;
};

const create = async ({name, code, description, price}) => {
  const [{ insertId }] = await connection.execute('INSERT INTO products (name, code, description, price) VALUES (?, ?, ?, ?)', [name, code, description, price]);
  return insertId;
};

const update = async (code, {name, description, price}) => {
  await connection.execute('UPDATE products SET name = ?, description = ?, price = ? WHERE code = ?', [name, description, price, code]);
  const product = await getByCode(code);
  return product;
};

const exclude = async (code) => connection.execute('DELETE FROM products WHERE code = ?', [code]);

export default {
  getAll,
  getByCode,
  create,
  update,
  exclude,
};
