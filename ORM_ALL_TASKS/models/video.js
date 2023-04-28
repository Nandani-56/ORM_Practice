"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    static associate(models) {
      // define association here
      video.hasMany(models.comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "video",
        },
      });
    }
  }
  video.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "video",
    }
  );
  return video;
};
