type Review = {
  rating: number,
  comment: string
}

type Product = {
  id: string,
  description: string,
  price: number,
  reviews: Review[]
}

// Placeholder data
const exampleProduct1: Product= {
  id: 'redshoe',
  description: 'Red Shoe',
  price: 42.12,
  reviews: []
}

const exampleProduct2: Product = {
  id: 'bluejeans',
  description: 'Blue Jeans',
  price: 50,
  reviews: []
}

const productResolvers = {
  Query: {
    products: () => [exampleProduct1, exampleProduct2]
  },
  Product: {
    id: (parent: Product) => parent.id,
    description: (parent: Product) => parent.description,
    price: (parent: Product) => parent.price,
    reviews: (parent: Product) => parent.reviews
  }
}

export {
  Product,
  exampleProduct1,
  exampleProduct2,
  productResolvers
}