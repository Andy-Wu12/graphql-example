import { exampleProduct1, exampleProduct2 } from "../products/product.resolver"
import type { Product } from "../products/product.resolver"

type OrderItem = {
  product: Product,
  quantity: number
}

type Order = {
  date: string,
  subtotal: number,
  items: OrderItem[]
}

const orderItem1: OrderItem = {
  product: exampleProduct1,
  quantity: 3
}

const orderItem2: OrderItem = {
  product: exampleProduct2,
  quantity: 4
}

const exampleOrder1: Order = {
  date: 'January-05-2023',
  subtotal: orderItem1.product.price * orderItem1.quantity,
  items: [orderItem1]
}

const exampleOrder2: Order = {
  date: 'January-05-2023',
  subtotal: (orderItem1.product.price * orderItem1.quantity) + (orderItem2.product.price * orderItem2.quantity),
  items: [orderItem1, orderItem2]
}

const orderResolvers = {
  Query: {
    orders: () => [exampleOrder1, exampleOrder2]
  },

}

export {
  Order,
  orderResolvers,
}