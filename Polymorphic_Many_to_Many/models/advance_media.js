'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class advance_media extends Model {

    static associate(models) {
      // define association here
      advance_media.belongsTo(models.post)
    }
  }
  advance_media.init({
    media_url: DataTypes.STRING,
    media_type: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    post_id : DataTypes.INTEGER,
    media_for : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'advance_media',
  });

  advance_media.beforeCreate(data=>{
    data.post_id = 9;
  })
  return advance_media;
};