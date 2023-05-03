"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    static associate(models) {
      // define association here
      country.hasOne(models.capital,{
        foreignKey:'countryId',
        onDelete : 'CASCADE',
        onUpdate: "CASCADE",
        hooks:true
      })
    }
  }
  country.init(
    {
      countryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "country",
      // paranoid: true,
      timestamps: true,
      hooks:{
        afterUpdate:async function(){
          console.log("After Update");
        },afterDestroy:async function(){
          console.log("After Destroy");
        }
      }
    }
  );
  return country;
};
