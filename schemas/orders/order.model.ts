import ProductModel from "../products/product.model";
import type { Product } from "../products/product.model";

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
  product: ProductModel.getAllProducts()[0],
  quantity: 3
}

const orderItem2: OrderItem = {
  product: ProductModel.getAllProducts()[1],
  quantity: 4
}

const orders = [
  {
    date: 'January-05-2023',
    subtotal: orderItem1.product.price * orderItem1.quantity,
    items: [orderItem1]
  },
  {
    date: 'January-05-2023',
    subtotal: (orderItem1.product.price * orderItem1.quantity) + (orderItem2.product.price * orderItem2.quantity),
    items: [orderItem1, orderItem2]
  }
]

function getAllOrders() {
  return orders
}

export type {
  Order
};

export {
  getAllOrders
};
