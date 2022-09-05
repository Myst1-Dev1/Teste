'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('rooms', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        room_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        hotel_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        available: {
          type:Sequelize.BOOLEAN,
          allowNull:false,
          defaultValue: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
       });
     
  },

  async down (queryInterface, Sequelize) {
    
   return queryInterface.dropTable('rooms');
     
  }
};
