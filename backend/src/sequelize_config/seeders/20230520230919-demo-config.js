'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('config', [
      {
      logopath: 'sopa.com',
      primcolor: 'blue',
      secondcolor: 'yellow',
      background: 'brown',
    },
    {
      logopath: 'hamburger.com',
      primcolor: 'red',
      secondcolor: 'green',
      background: 'blue',
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('config', null, {});  
  }
};
