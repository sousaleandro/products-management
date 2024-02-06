import { ChangeEvent, useContext, useState } from 'react';
import productsPost from '../services/productsPost';
import Context from '../context/Context';
import isValidPriceFormat from '../utils/productValidation';

function Buttons() {
  const { getProducts } = useContext(Context);
  const [addBtnState, setAddBtnState] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    code: '',
    description: '',
    price: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (product.name === '' || product.code === '' || product.description === '' || product.price === '') {
      return alert('Preencha todos os campos');
    }
    if (!isValidPriceFormat(product.price)) {
      return alert('Formato de preço inválido. Use o formato 0.00');
    }
    try {
      productsPost(product);
      return alert('Produto salvo com sucesso');
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setAddBtnState(false);
      setProduct({
        name: '',
        code: '',
        description: '',
        price: ''
      });
      getProducts();
    }
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [target.name]: target.value
    });
  };

  return (
    <div>
      <h1>Buttons</h1>
      <button onClick={() => setAddBtnState(!addBtnState)}>
        Adicionar novo produto
      </button>
      <button onClick={getProducts} >Listar todos os produtos</button>
      {
        addBtnState &&
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder="Nome" onChange={handleChange} maxLength={255}/>
          <input type="text" name='code' placeholder="Código" onChange={handleChange} maxLength={50}/>
          <input type="text" name='description' placeholder="Descrição" onChange={handleChange} maxLength={500}/>
          <input type="text" name='price' placeholder="Preço" onChange={handleChange}/>
          <button>Salvar</button>
        </form>
      }
    </div>
  );
}

export default Buttons;
