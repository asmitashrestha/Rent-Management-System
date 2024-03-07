"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Building.belongsTo(models.User, { foreignKey: "id" });
      Building.hasMany(models.Floor, { foreignKey: "id" });
    }
  }
  Building.init(
    {
      floors: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Building",
    }
  );
  return Building;
};
