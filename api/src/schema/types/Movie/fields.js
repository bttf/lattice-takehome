const {
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
const GenreType = require('../Genre');

module.exports = {
  adult: GraphQLBoolean,
  backdropPath: GraphQLString,
  belongsToCollection: GraphQLObjectType,
  budget: GraphQLInt,
  genres: new GraphQLList(GenreType),
  homepage: GraphQLString,
  id: GraphQLInt,
  imdbID: GraphQLString,
  originalLanguage: GraphQLString,
  originalTitle: GraphQLString,
  overview: GraphQLString,
  popularity: GraphQLInt,
  posterPath: GraphQLString,
  productionCompanies: new GraphQLList(GraphQLObjectType),
  productionCountries: new GraphQLList(GraphQLObjectType),
  releaseDate: GraphQLString,
  revenue: GraphQLInt,
  runtime: GraphQLInt,
  spokenLanguages: new GraphQLList(GraphQLObjectType),
  status: GraphQLString, // could be enum; see API docs
  tagline: GraphQLString,
  video: GraphQLBoolean,
  voteAverage: GraphQLFloat,
  voteCount: GraphQLInt,
};
