"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class option_master extends Model {
    static associate(models) {
      // define association here

      option_master.belongsTo(models.select_master, {
        foreignKey: "selectId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  option_master.init(
    {
      selectId: DataTypes.INTEGER,
      optionKey: DataTypes.STRING,
      optionValue: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "option_master",
    }
  );
  return option_master;
};
