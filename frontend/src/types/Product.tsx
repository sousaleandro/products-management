export interface ProductType {
  id: number
  name: string
  code: string
  description: string
  price: number
}

export interface CreateProductType {
  name: string
  code: string
  description: string
  price: string
}
