import { orderType } from "./order.graphql";
import { orderResolvers } from "./order.resolver";

const OrderModule = {
  typeDef: orderType,
  resolvers: orderResolvers
}

export default OrderModule;