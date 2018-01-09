const fetch = require('node-fetch');
const { API_KEY } = require('../config');

module.exports = async (_, { page = 1 }) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const json = await response.json();
  console.log('json', json);
  return json.results;
};
