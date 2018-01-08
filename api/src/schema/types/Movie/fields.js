const {
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
// const GenreType = require('../Genre');

module.exports = {
  adult: { type: GraphQLBoolean },
  backdrop_path: { type: GraphQLString },
  // belongsToCollection: new GraphQLObjectType,
  budget: { type: GraphQLInt },
  // genres: new GraphQLList(GenreType),
  homepage: { type: GraphQLString },
  id: { type: GraphQLInt },
  imdb_id: { type: GraphQLString },
  original_language: { type: GraphQLString },
  original_title: { type: GraphQLString },
  overview: { type: GraphQLString },
  popularity: { type: GraphQLInt },
  poster_path: { type: GraphQLString },
  // productionCompanies: new GraphQLList(new GraphQLObjectType),
  // productionCountries: new GraphQLList(GraphQLObjectType),
  release_date: { type: GraphQLString },
  revenue: { type: GraphQLInt },
  runtime: { type: GraphQLInt },
  // spokenLanguages: new GraphQLList(GraphQLObjectType),
  status: { type: GraphQLString }, // could be enum; see API doc
  tagline: { type: GraphQLString },
  video: { type: GraphQLBoolean },
  vote_average: { type: GraphQLFloat },
  vote_count: { type: GraphQLInt },
};
