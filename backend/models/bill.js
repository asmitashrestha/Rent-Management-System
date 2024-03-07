"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.Customer, {
        foreignKey: "id",
      });
      Bill.hasOne(models.Payment, {
        foreignKey: "id",
      });
    }
  }
  Bill.init(
    {
      customerName: DataTypes.STRING,
      floorRent: DataTypes.NUMBER,
      electricityCharges: DataTypes.NUMBER,
      waterCharges: DataTypes.NUMBER,
      internetCharges: DataTypes.NUMBER,
      others: DataTypes.NUMBER,
      previousAmount: DataTypes.NUMBER,
      total: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Bill",
    }
  );
  return Bill;
};
