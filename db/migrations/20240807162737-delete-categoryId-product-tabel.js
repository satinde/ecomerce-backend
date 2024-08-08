'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'categoryId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'categoryId', {
      type: Sequelize.STRING,
      allowNull: true, // Adjust based on your original column definition
    });
  }
};
