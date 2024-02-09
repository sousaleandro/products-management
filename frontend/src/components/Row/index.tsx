import { useContext, useState } from 'react';
import { ProductType } from '../../types/Product';
import { productsPatch } from '../../services/productRequests';
import isValidPriceFormat from '../../utils/productValidation';
import Context from '../../context/Context';
import { MdDelete, MdEdit, MdSave, MdCancel } from 'react-icons/md';

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
      <tr data-testid={`product-editable-${product.id}`} >
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
            value={(updateProduct.price)}
            onChange={handleChange}
          />
        </td>
        <td>
          <button
            title='Cancelar Edição'
            onClick={() => setEditable(false)}>
            <MdCancel size={23} color='gray'/>
          </button>
          <button
            title='Salvar Produto'
            disabled={product === updateProduct}
            onClick={() => handleSaveBtn()}
          >
            <MdSave size={23} color='gray'/>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr data-testid={`product-${product.id}`}>
      <td>{product.name}</td>
      <td>{product.code}</td>
      <td>{product.description}</td>
      <td>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(Number(product.price))}</td>
      <td>
        <button 
          title='Editar Produto'
          onClick={() => setEditable(true)}>
          <MdEdit size={23} color='gray'/>
        </button>
        <button 
          title='Deletar Produto'
          data-testid={`delete-btn-${product.id}`}
          onClick={() => setConfirmDelete(product.code)}>
          <MdDelete size={23} color='gray'/>
        </button>
      </td>
    </tr>
  );
}

export default Row;
