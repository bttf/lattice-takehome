/**
 * query {
 *  movie(id: Int) {
 *    ...movieFields
 *  },
 *  movies(name: String, page: Int) {
 *    ...movieFields
 *  },
 *  popularMovies(page: Int) {
 *    ...movieFields
 *  },
 * }
 */
const {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const MovieType = require('./Movie');
const getMovie = require('../../resolvers/getMovie');
const searchMovies = require('../../resolvers/searchMovies');
const getPopularMovies = require('../../resolvers/getPopularMovies');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      description: 'Details on a movie',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: getMovie,
    },
    movies: {
      type: new GraphQLList(MovieType),
      description: 'List of movies',
      args: {
        query: { type: GraphQLString },
        page: { type: GraphQLInt },
      },
      resolve: searchMovies,
    },
    popularMovies: {
      type: new GraphQLList(MovieType),
      description: 'List of popular movies',
      args: {
        page: { type: GraphQLInt },
      },
      resolve: getPopularMovies,
    },
  },
});
