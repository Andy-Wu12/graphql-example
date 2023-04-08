import express from 'express';
import { createYoga, createSchema } from 'graphql-yoga';

const schema = createSchema({
  typeDefs: `
    type Query {
      description: String
      price: Float
    }
  `,
  resolvers: {
    Query: {
      description: () => 'Red Shoe',
      price: () => 42.12
    }
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
