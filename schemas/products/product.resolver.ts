import ProductModel from "./product.model";
import type { Product } from "./product.model";

interface IPriceRangeArgs {
  min: number,
  max: number
}

interface INewProductArgs {
  id: string,
  description: string,
  price: number
}

interface INewReviewArgs {
  productID: string,
  rating: number,
  comment?: string 
}

const productResolvers = {
  Query: {
    products: () => ProductModel.getAllProducts(),

    productsByPriceRange: (_: unknown, args: IPriceRangeArgs) => {
      const { min, max } = args;
      return ProductModel.getProductsByPriceRange(min, max);
    },

    product: (_: unknown, args: { id: string }) => {
      const { id } = args;
      return ProductModel.getProductByID(id);
    }
  },

  Mutation: {
    addNewProduct: (_: unknown, args: INewProductArgs) => {
      const { id, description, price } = args;
      return ProductModel.addNewProduct(id, description, price);
    },
    addNewProductReview: (_: unknown, args: INewReviewArgs) => {
      const { productID, rating, comment } = args;
      return ProductModel.addNewProductReview(productID, rating, comment);
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
