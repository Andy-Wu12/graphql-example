import ProductModel from "./product.model";
import type { Product } from "./product.model";

const productResolvers = {
  Query: {
    products: () => ProductModel.getAllProducts(),

    productsByPriceRange: (_: unknown, args: any) => {
      const { min, max } = args;
      return ProductModel.getProductsByPriceRange(min, max);
    },

    product: (_: unknown, args: any) => {
      const { id } = args;
      return ProductModel.getProductByID(id);
    }
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
