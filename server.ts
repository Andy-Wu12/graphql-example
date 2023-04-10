import express from 'express';
import { createYoga } from 'graphql-yoga';

import { schema } from './schemas/graphql';

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
