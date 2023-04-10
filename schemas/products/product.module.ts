import { productType } from "./product.graphql";
import { productResolvers } from "./product.resolver";

const ProductModule = {
  typeDef: productType,
  resolvers: productResolvers
}

export default ProductModule;