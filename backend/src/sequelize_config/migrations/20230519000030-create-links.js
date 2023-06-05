'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('links', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      url: {
        type: DataTypes.STRING(350),
        allowNull: false
      },
      icon_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_link',
          key: 'id'
        }
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
    return queryInterface.dropTable('links');
  }
};
