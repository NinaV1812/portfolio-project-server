'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "choices",
      [{
        gameMovieId:  1,
        userId: 1,
        picked: true,
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        gameMovieId: 1,
        userId: 2,
        picked: false,
        createdAt: new Date(),
          updatedAt: new Date(),
      },{
        gameMovieId:  2,
        userId: 2,
        picked: true,
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        gameMovieId:  2,
        userId: 1,
        picked: true,
        createdAt: new Date(),
          updatedAt: new Date(),
      }
    ], {}
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("choices", null, {});
  }
};
