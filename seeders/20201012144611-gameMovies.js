'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "gameMovies",
      [
        {
          gameId: 1,
          movieId:1,
          details: "string",
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        gameId: 1,
        movieId:2,
        details: "string",
        createdAt: new Date(),
          updatedAt: new Date(),
    },
    {
      gameId: 2,
      movieId:3,
      details: "string",
      createdAt: new Date(),
          updatedAt: new Date(),
    }
    ], {}
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gameMovies", null, {});
  }
};