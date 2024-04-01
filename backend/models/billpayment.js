"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class billPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      billPayment.belongsTo(models.Customer, {
        foreignKey: "c_id",
      });
    }
  }
  billPayment.init(
    {
      c_id: DataTypes.NUMBER,
      paidAmount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "billPayment",
    }
  );
  return billPayment;
};
