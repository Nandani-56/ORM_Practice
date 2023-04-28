"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class basic_media extends Model {
    static associate(models) {
      // define association here
      basic_media.belongsTo(models.post);
    }
  }
  basic_media.init(
    {
      media_url: DataTypes.STRING,
      media_type: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      media_for : DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "basic_media",
    }
  );

  basic_media.beforeCreate(data=>{
    data.post_id = 9;
  })
  return basic_media;
};
