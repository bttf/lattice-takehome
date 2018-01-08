const fetch = require('node-fetch');
const { API_KEY } = require('../config');

module.exports = async (_, { id }) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const json = await response.json();
  return json;
};
