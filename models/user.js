"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.choice);
      // user.hasOne(models.choice)
      user.belongsToMany(models.game, {
        through: "partcipants",
        foreignKey: "userId",
      });
      user.belongsToMany(models.gameMovie, {
        through: "choice",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
