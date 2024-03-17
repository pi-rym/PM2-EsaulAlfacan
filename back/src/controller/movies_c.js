const moviesS = require("../services/moviesS");

const MOVIES_CONTROLLER = async (req, res) => {
  try {
    const response = await moviesS.fgetAllMovies();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = MOVIES_CONTROLLER;
