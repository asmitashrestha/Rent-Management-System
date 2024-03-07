"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Floor.belongsTo(models.Building, { foreignKey: "bid" });
      Floor.hasOne(models.Customer, {
        foreignKey: "floorNumber",
      });
    }
  }
  Floor.init(
    {
      room: DataTypes.NUMBER,
      pricePerRoom: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Floor",
    }
  );
  return Floor;
};
