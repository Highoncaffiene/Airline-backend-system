'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNNull: false,  // the name cannot be null if the data is created using js, but creating the data directly in the db, the name can be null
    unique: true
    
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};