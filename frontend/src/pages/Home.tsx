import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Context from '../context/Context';
import Buttons from '../components/Buttons';

function Home () {
  const { getProducts, products, loading } = useContext(Context);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, [products]);

  return (
    <>
      <Header />
      <div>
        <Buttons />
        { loading ? <p>Loading...</p> : <Table /> }
      </div>
    </>
  );
}

export default Home;
