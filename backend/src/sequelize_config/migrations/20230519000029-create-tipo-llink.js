'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tipo_link', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      icon_name: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('tipo_link');
  }
};
