'use strict';

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
      logopath: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      primcolor: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      secondcolor: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      background: {
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
