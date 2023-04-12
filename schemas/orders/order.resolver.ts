import { getAllOrders } from "./order.model"

const orderResolvers = {
  Query: {
    orders: () => getAllOrders()
  },

}

export {
  orderResolvers,
}