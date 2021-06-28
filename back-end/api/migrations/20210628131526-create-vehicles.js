'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Vehicles', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        placa: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        chassi: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        renavam: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        modelo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        marca: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ano: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Vehicles');
  }
};
