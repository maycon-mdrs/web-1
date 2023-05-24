'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('tipo_link', [
        {
        descricao: 'ifood',
        icone: 'icons.ifood'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tipo_link', null, {});  
  }
};
