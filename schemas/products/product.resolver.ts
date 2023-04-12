import { getAllProducts } from "./product.model";
import type { Product } from "./product.model";

const productResolvers = {
  Query: {
    products: () => getAllProducts()
  },
  Product: {
    id: (parent: Product) => parent.id,
    description: (parent: Product) => parent.description,
    price: (parent: Product) => parent.price,
    reviews: (parent: Product) => parent.reviews
  }
}

export {
  productResolvers
}