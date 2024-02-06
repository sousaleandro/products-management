import { useContext, useState } from 'react';
import { ProductType } from '../types/Product';
import productsPatch from '../services/productsPatch';
import isValidPriceFormat from '../utils/productValidation';
import Context from '../context/Context';

function Row({ product, setConfirmDelete }: { product: ProductType; setConfirmDelete: React.Dispatch<React.SetStateAction<string | null>> }) {
  const { getProducts } = useContext(Context);
  const [editable, setEditable] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(product);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProduct({
      ...updateProduct,
      [target.name]: target.value
    });
  };

  const handleSaveBtn = async () => {
    if (updateProduct.name === '' || updateProduct.code === '' || updateProduct.description === '') {
      return alert('Preencha todos os campos');
    }
    if (!isValidPriceFormat(updateProduct.price)) {
      return alert('Formato de preço inválido. Use o formato 0.00');
    }
    try {
      await productsPatch(updateProduct);
      setEditable(false);
      await getProducts();
      alert('Produto salvo com sucesso');
    }
    catch (error) {
      console.log(error);
    }
  };

  if (editable) {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="name"
            value={updateProduct.name}
            onChange={handleChange}
            maxLength={255}
          />
        </td>
        <td>
          <input
            type="text"
            name="code"
            value={updateProduct.code}
            onChange={handleChange}
            maxLength={50}
          />
        </td>
        <td>
          <input
            type="text"
            name="description"
            value={updateProduct.description}
            onChange={handleChange}
            maxLength={500}
          />
        </td>
        <td>
          <input
            type="text"
            name="price"
            value={updateProduct.price}
            onChange={handleChange}
          />
        </td>
        <td>
          <button onClick={() => setEditable(false)}>
          Cancelar
          </button>
        </td>
        <td>
          <button
            disabled={product === updateProduct}
            onClick={() => handleSaveBtn()}
          >
          Salvar
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.code}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => setEditable(true)}>
          Editar
        </button>
      </td>
      <td>
        <button onClick={() => setConfirmDelete(product.code)}>
          X
        </button>
      </td>
    </tr>
  );
}

export default Row;
