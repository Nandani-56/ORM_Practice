"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
      user.hasMany(models.post, {
        foreignKey: "user_id",
        onDelete:"CASCADE"
      });

      user.hasMany(models.comment, {
        foreignKey: "user_id",
        onDelete : "CASCADE"
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );


  return user;
};
