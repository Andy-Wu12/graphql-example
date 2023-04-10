import { createSchema } from "graphql-yoga";

import { productResolvers } from './products/product.resolver';
import { productType } from './products/product.graphql';

import { orderResolvers } from "./orders/order.resolver";
import { orderType } from "./orders/order.graphql";

const schema = createSchema({
  typeDefs: [productType, orderType],
  resolvers: [productResolvers, orderResolvers]
});

export {
  schema
}