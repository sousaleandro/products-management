import { type CreateProductType } from '../types/Product'

export default async function productsPost (product: CreateProductType): Promise<void> {
  try {
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
  } catch (error) {
    console.log(error)
  }
}
