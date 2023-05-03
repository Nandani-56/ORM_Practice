"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    static associate(models) {
      // define association here
      task.belongsTo(models.student, {
        foreignKey: "userId",
        onDelete: "CASCADE", // it configures our model so that if a user is deleted , the user's task will be deleted too! It won't work for soft delete.It works for hard delete
      });
    }
  }
  task.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "task",
      paranoid: true,
    }
  );

  return task;
};
