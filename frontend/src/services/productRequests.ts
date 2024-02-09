import { CreateProductType, type ProductType } from '../types/Product';

export async function productsFetch (): Promise<ProductType[] | undefined> {
  try {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function productsPost (product: CreateProductType): Promise<void> {
  try {
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  } catch (error) {
    console.log(error);
  }
}

export async function productsPatch (product: ProductType): Promise<void> {
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

export async function productsDelete (code: string): Promise<void> {
  try {
    await fetch(`http://localhost:3001/products/${code}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }
}
