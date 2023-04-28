'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_media_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_media_comment.init({
    action_type: DataTypes.STRING,
    action_id: DataTypes.INTEGER,
    attachement_type: DataTypes.STRING,
    attachment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_media_comment',
  });
  return post_media_comment;
};