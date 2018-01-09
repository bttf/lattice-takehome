const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
