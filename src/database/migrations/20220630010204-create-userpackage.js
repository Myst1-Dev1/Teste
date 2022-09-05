'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('user_packages', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
         },
         user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: "users",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
         },
         package_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: "packages",
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
    
      return queryInterface.dropTable('userpackages');
    
  }
};
