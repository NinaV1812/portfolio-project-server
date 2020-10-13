'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "participants",
      [{
        gameId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        gameId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        gameId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{}
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("participants", null, {});
  }
};
