"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      // define association here
      Country.hasOne(models.Capital,{
        foreignKey:'countryId',
        onDelete : 'CASCADE',
        onUpdate: "CASCADE",
        hooks:true
      })
    }
  }
  Country.init(
    {
      countryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
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
  return Country;
};
