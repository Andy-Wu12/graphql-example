
const orderType = /* GraphQL */`
  type Query {
    orders: [Order]
  }

  type OrderItem {
    product: Product!,
    quantity: Int!
  }

  type Order {
    date: String!,
    subtotal: Float!,
    items: [OrderItem!]!
  }
`;

export {
  orderType
}