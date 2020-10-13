'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert(
        "games",
        [{
          code:123,
          started: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code:456,
          started: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {}
      )},
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("games", null, {});
    }
  };
