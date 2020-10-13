'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gameMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gameMovie.belongsTo(models.game)
      gameMovie.hasMany(models.choice)
    }
  };
  gameMovie.init({
    gameId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gameMovie',
  });
  return gameMovie;
};

