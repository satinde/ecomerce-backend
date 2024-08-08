'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'roleId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.STRING,
      allowNull: true, // Adjust based on your original column definition
    });
  }
};
