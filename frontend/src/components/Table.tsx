import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
// import { CreateProductType } from '../types/Product';
import productsDelete from '../services/productsDelete';

function Table () {
  const { products, setLoading, getProducts } = useContext(Context);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleDelete = async (code: string) => {
    const shouldDelete = window.confirm('Tem certeza de que deseja excluir este produto?');

    if (shouldDelete) {
      setLoading(true);
      try {
        await productsDelete(code);
        console.log(code);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setConfirmDelete(null);
        setLoading(false);
        getProducts();
      }
    }
    setConfirmDelete(null);
  };
 
  useEffect(() => {
    if (confirmDelete) {
      handleDelete(confirmDelete);
    }
  }, [confirmDelete]);

  // const handleUpdateBtn = (product: CreateProductType) => {
  //   console.log(product);
  // };

  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Código</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => {}}>
                Botão 1
                </button>
              </td>
              <td>
                <button onClick={() => setConfirmDelete(product.code)}>
                X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
