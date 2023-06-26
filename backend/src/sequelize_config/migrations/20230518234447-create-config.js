'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('config', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      logopath: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      button_color: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      text_color: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      background_color: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      button_colorOver: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('config');
  }
};
