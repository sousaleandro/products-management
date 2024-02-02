import React, { useMemo, useState } from 'react'
import Context from './Context'
// import { useNavigate } from 'react-router-dom'
import productsFetch from '../services/productsFetch'
import { type ProductType } from '../types/Product'

interface ProviderProps {
  children: React.ReactNode
}

export interface ProviderValues {
  loading: boolean
}

function Provider ({ children }: ProviderProps): JSX.Element {
  // const navigate = useNavigate()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)

  const getProducts: any = async () => {
    setLoading(true)
    try {
      const products = await productsFetch()
      setProducts(products ?? [])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const values = useMemo(() => ({
    loading,
    products,
    getProducts
  }), [])

  return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>)
}

export default Provider
