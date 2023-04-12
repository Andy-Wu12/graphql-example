
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
const products: Product[] = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: []
  },

  {
    id: 'bluejeans',
    description: 'Blue Jeans',
    price: 50,
    reviews: []
  }
]

function getAllProducts() {
  return products;
}

export type {
  Product
};

export {
  getAllProducts
};
