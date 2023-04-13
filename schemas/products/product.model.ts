
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

function getProductsByPriceRange(min: number, max: number): Product[] {
  return products.filter((product) => { 
    return product.price >= min && product.price <= max;
  })
}

function getProductByID(id: string): Product | undefined {
  return products.find((product) => {
    return product.id === id;
  })
}

const ProductModel = {
  getAllProducts, 
  getProductsByPriceRange,
  getProductByID
};

export type {
  Product
};

export default ProductModel;
