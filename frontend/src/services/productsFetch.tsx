import { type ProductType } from '../types/Product'

export default async function productsFetch (): Promise<ProductType[] | undefined> {
  try {
    const response = await fetch('http://localhost:3001/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
