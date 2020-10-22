"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("gameMovies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: "games",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      movieId: {
        type: Sequelize.INTEGER,
      },
      overview: {
        type: Sequelize.TEXT,
      },
      title: {
        type: Sequelize.STRING,
      },
      release_date: {
        type: Sequelize.DATEONLY,
      },
      vote_average: {
        type: Sequelize.FLOAT,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("gameMovies");
  },
};
