"use strict";

const gamemovie = require("../models/gamemovie");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   "gameMovies",
    //   "title",
    //   { type: Sequelize.STRING },
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("gameMovies", "title", {});
  },
};
