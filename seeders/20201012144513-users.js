'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
       { name: "User 1",
       email: "email.com",
       password: "123",
       createdAt: new Date(),
       updatedAt: new Date(),
      
      },
      { name: "User 2",
      email: "rer@.com",
      password: "456",
      createdAt: new Date(),
      updatedAt: new Date(),
     
     },
     { name: "User 3",
     email: "bla@.com",
     password: "789",
     createdAt: new Date(),
          updatedAt: new Date(),
    }
      ], {}
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});

  }
};
