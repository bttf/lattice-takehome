const fetch = require('node-fetch');
const { API_KEY } = require('../config');

module.exports = async (_, { query, page = 1 }) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
  const json = await response.json();
  return json.results;
};
