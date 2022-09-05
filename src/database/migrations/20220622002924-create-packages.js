'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('packages', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
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
        date_start: {
          type: Sequelize.DATE,
          allowNull: false
        },
        date_end: {
          type: Sequelize.DATE,
          allowNull: false
        },
        count_people: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        count_days: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        room_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: "rooms",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        flight_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: "flights",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
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
      return queryInterface.dropTable('packages');
     
  }
};
