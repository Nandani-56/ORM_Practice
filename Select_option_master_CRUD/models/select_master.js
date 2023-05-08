"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class select_master extends Model {
    static associate(models) {
      // define association here
      select_master.hasMany(models.option_master, {
        foreignKey: "selectId",
        onDelete: "CASCADE",
      });
    }
  }
  select_master.init(
    {
      name: DataTypes.STRING,
      controllerType: DataTypes.STRING,
      allowMultiple: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "select_master",
    }
  );
  return select_master;
};
