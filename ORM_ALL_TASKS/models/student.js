"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here

      // One to Many relationship
      Student.hasMany(models.Task, {
        foreignKey: "userId",
      });
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      contactNumber: DataTypes.BIGINT,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
      paranoid: true,
      timestamps: true,
      hooks: {
        afterCreate: function (instance, options) {
          console.log("After Insert");
        },
        beforeCreate: function (instance, options) {
          console.log("Before Insert");
        },
        afterUpdate: async function (instance, options) {
          console.log("After Update!!!");
        },
        afterFind: function () {
          console.log("Data Found");
        },
        beforeFind: function () {
          console.log("Before Find");
        },
      },
      
    }
  );

  return Student;
};
