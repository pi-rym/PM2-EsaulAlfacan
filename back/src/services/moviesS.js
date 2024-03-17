require("dotenv").config();
const { Movies } = require("../types/class");
const axios = require("axios");
const { BASE_URL } = process.env;

module.exports = {
  fgetAllMovies: async (data) => {
    try {
      const { data } = await axios.get(BASE_URL);
      const movies = data.map((movie) => new Movies(movie));
      return movies;
    } catch (error) {
      throw new Error(error);
    }
  },
};
