'use strict';

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
      url: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      tipo: {
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
