'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('flights', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull:false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        origin: {
          type: Sequelize.STRING,
          allowNull: false
        },
        destination: {
          type: Sequelize.STRING,
          allowNull: false
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false
        },
        date_out: {
          type: Sequelize.DATE,
          allowNull: false
        },
        date_in: {
          type: Sequelize.DATE,
          allowNull: false
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
      return queryInterface.dropTable('flights');
    
  }
};
