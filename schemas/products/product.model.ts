
type Review = {
  rating: number,
  comment?: string
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

function addNewProduct(id: string, description: string, price: number): Product {
  const newProduct: Product = {
    id,
    price,
    description,
    reviews: []
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(productID: string, rating: number, comment?: string): Product | undefined {
  const newReview: Review = {
    rating,
    comment
  };

  const matchedProduct = getProductByID(productID);
  if(matchedProduct) {
    matchedProduct.reviews.push(newReview);
    return matchedProduct;
  }

  return undefined;
}

const ProductModel = {
  getAllProducts, 
  getProductsByPriceRange,
  getProductByID,
  addNewProduct,
  addNewProductReview
};

export type {
  Product
};

export default ProductModel;
