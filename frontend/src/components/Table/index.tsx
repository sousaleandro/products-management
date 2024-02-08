import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import productsDelete from '../../services/productsDelete';
import Row from '../Row';
import './style.css';

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

  return (
    <div className='table-content'>
      <h2>Produtos</h2>
      <button onClick={getProducts} >Listar todos os produtos</button>
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
          {products.map(({id, name, code, description, price}) => (
            <Row 
              key={id}
              product={{id, name, code, description, price}}
              setConfirmDelete={setConfirmDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
