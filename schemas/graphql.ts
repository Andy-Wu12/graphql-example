import { createSchema } from "graphql-yoga";

import OrderModule from "./orders/order.module";
import ProductModule from "./products/product.module";

const schema = createSchema({
  typeDefs: [
    OrderModule.typeDef,
    ProductModule.typeDef
  ],
  resolvers: [
    OrderModule.resolvers,
    ProductModule.resolvers
  ]
});

export {
  schema
}