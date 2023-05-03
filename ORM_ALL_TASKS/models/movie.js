const { Sequelize, Op } = require("sequelize");
("use strict");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      // define association here
      movie.belongsToMany(models.actor, {
        through: models.movie_actor,
        foreignKey: "movieId",
      });
    }
  }
  movie.init(
    {
      movieName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movie",
      paranoid: true,
      timestamps: true,
    }
  );

  return movie;
};
