import express from 'express';
import { createYoga, createSchema } from 'graphql-yoga';

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

type OrderItem = {
  product: Product,
  quantity: number
}

type Order = {
  date: string,
  subtotal: number,
  items: OrderItem[]
}

const product1: Product= {
  id: 'redshoe',
  description: 'Red Shoe',
  price: 42.12,
  reviews: []
}

const product2: Product = {
  id: 'bluejeans',
  description: 'Blue Jeans',
  price: 50,
  reviews: []
}

const orderItem1: OrderItem = {
  product: product1,
  quantity: 3
}

const orderItem2: OrderItem = {
  product: product2,
  quantity: 4
}

const order1: Order = {
  date: 'January-05-2023',
  subtotal: orderItem1.product.price * orderItem1.quantity,
  items: [orderItem1]
}

const order2: Order = {
  date: 'January-05-2023',
  subtotal: (orderItem1.product.price * orderItem1.quantity) + (orderItem2.product.price * orderItem2.quantity),
  items: [orderItem1, orderItem2]
}

const products: Product[] = [product1, product2];
const orders: Order[] = [order1, order2];

const schema = createSchema({
  typeDefs: 
  `
    type Query {
      products: [Product]
      orders: [Order]
    }

    type Product {
      id: ID!
      description: String!
      price: Float!
      reviews: [Review]
    }

    type Review {
      rating: Int!
      comment: String
    }

    type Order {
      date: String!
      subtotal: Float!
      items: [OrderItem]!
    }

    type OrderItem {
      product: Product!
      quantity: Int!
    }
  `,
  resolvers: {
    Query: {
      products: () => products,
      orders: () => orders
    },
  }
});

const app = express();

const yoga = createYoga({
  schema,
  context: (req) => ({ // Context factory gets called for every request

  }),
  graphiql: true,
});

app.use('/graphql', yoga);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
