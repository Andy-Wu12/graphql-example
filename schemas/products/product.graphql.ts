
const productType = /* GraphQL */ `
  type Query {
    products: [Product]
    productsByPriceRange(min: Float!, max: Float!): [Product]
    product(id: ID!): Product
  }

  type Product {
    id: ID!,
    description: String!,
    price: Float!,
    reviews: [Review]
  }

  type Review {
    rating: Int!,
    comment: String
  }
`

export {
  productType
}
