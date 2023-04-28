"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    static associate(models) {
      // define association here
      image.hasMany(models.comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "image",
        },
      });
    }
  }
  image.init(
    {
      url: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
