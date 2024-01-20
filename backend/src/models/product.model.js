import connection from './connection';

// Get all products
const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

// const create = async (name) => {
//   const [{ insertId }] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
//   return insertId;
// };

// const update = async (id, name) => {
//   await connection.execute('UPDATE products SET name = ? WHERE id = ?', [name, id]);
//   const product = await getById(id);
//   return product;
// };

const exclude = async (id) => connection.execute('DELETE FROM products WHERE id = ?', [id]);

export default {
  getAll,
  getById,
  create,
  update,
  exclude,
};
