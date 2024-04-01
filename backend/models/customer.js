"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Floor, {
        foreignKey: "fId",
      });
      Customer.hasOne(models.Bill, {
        foreignKey: "cId",
      });
      Customer.hasMany(models.Payment, {
        foreignKey: "c_id",
      });
    }
  }
  
  Customer.init(
    {
      fId:DataTypes.NUMBER,
      customerName: DataTypes.STRING,
      floorNumber: DataTypes.NUMBER,
      billAmount: DataTypes.NUMBER,
      paidAmount: DataTypes.NUMBER,
      remainingAmount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
