"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Bill, {
        foreignKey: "b_id",
      });
    }
  }
  Payment.init(
    {
      b_id: DataTypes.NUMBER,
      payer: DataTypes.STRING,
      paidAmount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
