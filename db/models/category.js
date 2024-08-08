'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products', // Alias to access User
        through: 'ProductCategories',
        onDelete: 'CASCADE', // Delete UserDetail if User is deleted
        onUpdate: 'CASCADE' // Update UserDetail if User is updated
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};