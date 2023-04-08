import express from 'express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Item',
    fields: {
      description: {
        type: GraphQLString,
        resolve: () => 'Red Shoe',
      },
      price: {
        type: GraphQLFloat,
        resolve: () => 42.12
      }
    }
  }),
});

// const root = {
//   description: 'Red Shoe',
//   price: 42.12
// }

const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
