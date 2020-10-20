"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "gameMovies",
      [
        {
          gameId: 1,
          movieId: 1,
          overview: "string",
          title: "title",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameId: 1,
          movieId: 2,
          overview: "string",
          title: "title",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameId: 2,
          movieId: 3,
          overview: "string",
          title: "title",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gameMovies", null, {});
  },
};
