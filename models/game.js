"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game.hasMany(models.gameMovie);
      // game.belongsTo(models.gameMovie)
      game.belongsToMany(models.user, {
        through: "participants",
        foreignKey: "gameId",
      });
    }
  }
  game.init(
    {
      code: DataTypes.INTEGER,
      started: DataTypes.BOOLEAN,
      finished: DataTypes.BOOLEAN,
      genres: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "game",
    }
  );
  return game;
};
