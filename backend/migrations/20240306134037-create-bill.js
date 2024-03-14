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
        defaultValue: 0,
      },
      electricityCharges: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      waterCharges: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      internetCharges: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      previousAmount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
