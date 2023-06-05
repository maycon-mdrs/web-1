'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('links', [
      {
      url: 'teste1',
      texto: 'Instagram',
      tipo: '1'
    },
    {
      url: 'teste2',
      texto: 'Ifood',
      tipo: '2'
    }
  ], {});
  
},

async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('links', null, {});  
}
};
