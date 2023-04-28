const { Sequelize, Op } = require("sequelize");
"use strict";
const { Model } = require("sequelize");
const movie_actor = require("./movie_actor");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Actor, {
        through: models.Movie_Actor,
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      movieName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
      paranoid: true,
      timestamps: true,
    }
  );

  
  return Movie;
};
