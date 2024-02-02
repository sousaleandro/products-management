export default async function productsDelete (code: string): Promise<void> {
  try {
    await fetch(`http://localhost:3001/products/${code}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error)
  }
}
