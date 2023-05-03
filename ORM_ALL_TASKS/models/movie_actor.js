const { Sequelize, Op } = require("sequelize");
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie_actor extends Model {
    static associate(models) {
      movie_actor.belongsTo(models.actor, {
        foreignKey: "actorId",
      });

      movie_actor.belongsTo(models.movie, {
        foreignKey: "movieId",
      });
    }
  }
  movie_actor.init(
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
      modelName: "movie_actor",
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
  movie_actor.addScope("scope1", {
    where: {
      actorId: {
        [Op.gte]: 3,
      },
    },
  });

  return movie_actor;
};
