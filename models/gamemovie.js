"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gameMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gameMovie.belongsTo(models.game);
      gameMovie.hasMany(models.choice);
      gameMovie.hasMany(models.user);
    }
  }
  gameMovie.init(
    {
      gameId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      overview: DataTypes.TEXT,
      title: DataTypes.STRING,
      release_date: DataTypes.DATEONLY,
      vote_average: DataTypes.FLOAT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "gameMovie",
    }
  );
  return gameMovie;
};
