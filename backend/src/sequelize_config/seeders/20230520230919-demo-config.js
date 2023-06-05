'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('config', [
      {
      name: 'dogspeto',
      description: 'fjlsakjdflkas',
      logopath: 'sopa.com',
      button_color: 'blue',
      text_color: 'yellow',
      background_color: 'brown',
    },
    {
      name: 'gil',
      description: 'fjlsakjdflkas',
      logopath: 'sopa.com',
      button_color: 'blue',
      text_color: 'yellow',
      background_color: 'brown',
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('config', null, {});  
  }
};
