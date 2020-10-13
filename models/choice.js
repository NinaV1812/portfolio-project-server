'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class choice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      choice.belongsTo(models.gameMovie)
      choice.belongsTo(models.user)
    }
  };
  choice.init({
    gameMovieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    picked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'choice',
  });
  return choice;
};