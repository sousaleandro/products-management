import React, { useMemo, useState } from 'react';
import Context from './Context';
import { productsFetch } from '../services/productRequests';
import { type ProductType } from '../types/Product';

interface ProviderProps {
  children: React.ReactNode
}

export interface ProviderValues {
  loading: boolean
  products: ProductType[]
  getProducts: () => Promise<void>
  setLoading: (loading: boolean) => void
}

function Provider({ children }: ProviderProps): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    try {
      const products = await productsFetch();
      setProducts(products ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const values = useMemo(() => ({
    loading,
    products,
    getProducts,
    setLoading,
  }), [loading, products, setLoading]);

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>);
}

export default Provider;
