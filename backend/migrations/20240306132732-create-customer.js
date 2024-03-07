"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Floors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      customerName: {
        type: Sequelize.STRING,
      },
      floorNumber: {
        type: Sequelize.INTEGER,
      },
      previousBalance: {
        type: Sequelize.INTEGER,
      },
      currentBillAmount: {
        type: Sequelize.INTEGER,
      },
      paidAmount: {
        type: Sequelize.INTEGER,
      },
      remainingBalance: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Customers");
  },
};
