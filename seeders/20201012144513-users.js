"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        { name: "User 1", createdAt: new Date(), updatedAt: new Date() },
        { name: "User 2", createdAt: new Date(), updatedAt: new Date() },
        { name: "User 3", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
