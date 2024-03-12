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
      Payment.belongsTo(models.Customer, {
        foreignKey: "c_id",
      });
    }
  }
  Payment.init(
    {
      c_id: DataTypes.NUMBER,
      paidAmount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
