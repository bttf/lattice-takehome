const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT)
  .then(() => { console.log(`Listening on port ${PORT}`); });
