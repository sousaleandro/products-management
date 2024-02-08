import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Context from '../context/Context';
import AddProduct from '../components/AddProduct';

function Home () {
  const { getProducts, loading } = useContext(Context);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div
        className='initial_animation'
      >
        <AddProduct />
        <button 
          className='all_products_btn'
          onClick={getProducts} >Listar todos os produtos
        </button>
        { loading ? <p>Loading...</p> : <Table /> }
      </div>
    </>
  );
}

export default Home;
