'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('links', [
      {
      title: 'Restaurante',
      url: 'teste1',
      icon_type: '1'
    },
    {
      title: 'Instagram',
      url: 'teste2',
      icon_type: '2'
    }
  ], {});
  
},

async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('links', null, {});  
}
};
