'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('tipo_link', [
        {
        icon_name: 'material-symbols:restaurant-menu'
      },
      {
        icon_name: 'mdi:instagram'
      },
      {
        icon_name: 'simple-icons:ifood'
      },
      {
        icon_name: 'material-symbols:pin-drop-rounded'
      },
      {
        icon_name: 'mdi:web'
      },
      {
        icon_name: 'ic:baseline-tiktok'
      },
      {
        icon_name: 'mdi:whatsapp'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tipo_link', null, {});  
  }
};
