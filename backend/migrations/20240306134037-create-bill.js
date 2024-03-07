"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Customers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      customerName: {
        type: Sequelize.STRING,
      },
      floorRent: {
        type: Sequelize.INTEGER,
      },
      electricityCharges: {
        type: Sequelize.INTEGER,
      },
      waterCharges: {
        type: Sequelize.INTEGER,
      },
      internetCharges: {
        type: Sequelize.INTEGER,
      },
      others: {
        type: Sequelize.INTEGER,
      },
      previousAmount: {
        type: Sequelize.INTEGER,
      },
      total: {
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
    await queryInterface.dropTable("Bills");
  },
};
