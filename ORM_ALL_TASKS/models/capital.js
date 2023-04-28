"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capital extends Model {
    static associate(models) {
      // define association here
      Capital.belongsTo(models.Country, {
        foreignKey: "countryId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        hooks:true
      });
    }
  }
  Capital.init(
    {
      capitalName: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Capital",
      // paranoid: true,
      timestamps: true,
    }
  );
  return Capital;
};
