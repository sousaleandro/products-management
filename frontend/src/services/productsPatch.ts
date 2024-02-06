import { type ProductType } from '../types/Product';

export default async function productsPatch (product: ProductType): Promise<void> {
  try {
    await fetch(`http://localhost:3001/products/${product.code}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  } catch (error) {
    console.log(error);
  }
}
