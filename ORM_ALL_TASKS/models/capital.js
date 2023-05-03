"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class capital extends Model {
    static associate(models) {
      // define association here
      capital.belongsTo(models.country, {
        foreignKey: "countryId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        hooks:true
      });
    }
  }
  capital.init(
    {
      capitalName: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "capital",
      // paranoid: true,
      timestamps: true,
    }
  );
  return capital;
};
