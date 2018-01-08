const {
  GraphQLObjectType,
} = require('graphql');
const MovieFields = require('./fields');

module.exports = new GraphQLObjectType({
  name: 'Movie',
  fields: MovieFields,
});
