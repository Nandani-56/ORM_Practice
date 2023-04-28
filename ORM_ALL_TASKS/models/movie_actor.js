const { Sequelize, Op } = require("sequelize");
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_Actor extends Model {
    static associate(models) {
      Movie_Actor.belongsTo(models.Actor, {
        foreignKey: "actorId",
      });

      Movie_Actor.belongsTo(models.Movie, {
        foreignKey: "movieId",
      });
    }
  }
  Movie_Actor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      movieId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "Movie_Actor",
      paranoid: true,
      timestamps: true,

      // Add Scopes
      scopes: {
        agreater() {
          return {
            where: {
              actorId: {
                [Op.gte]: 1,
              },
            },
          };
        },

        mgreater: {
          where: {
            movieId: {
              [Op.gte]: 2,
            },
          },
        },
      },
    }
  );

  // 2nd way to add scope
  Movie_Actor.addScope("scope1", {
    where: {
      actorId: {
        [Op.gte]: 3,
      },
    },
  });

  return Movie_Actor;
};
