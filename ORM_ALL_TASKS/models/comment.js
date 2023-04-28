"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      // define association here
      comment.belongsTo(models.image, {
        foreignKey: "commentableId",
        constraints: false,
      });
      comment.belongsTo(models.video, {
        foreignKey: "commentableId",
        constraints: false,
      });
    }
  }
  comment.init(
    {
      title: DataTypes.STRING,
      commentableId: DataTypes.INTEGER,
      commentableType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
