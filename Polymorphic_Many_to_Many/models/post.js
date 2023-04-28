"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      // define association here
      post.hasMany(models.comment,{
        foreignKey:"post_id",
        onDelete:"CASCADE"
      })
      post.hasMany(models.basic_media,{
        sourceKey : "id",
        foreignKey : "post_id",
        onDelete:"CASCADE"
      })
      post.hasMany(models.advance_media,{
        sourceKey : "id",
        foreignKey : "post_id",
        onDelete:"CASCADE"
      })
      post.belongsTo(models.user,{
        foreignKey:"user_id"
      })
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );

  
  return post;
};


// 
