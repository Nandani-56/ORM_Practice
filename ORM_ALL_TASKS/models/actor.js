const { Sequelize, Op } = require("sequelize");
("use strict");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    static associate(models) {
      actor.belongsToMany(models.movie, {
        through: models.movie_actor,
        foreignKey: "actorId",
      });
    }
  }
  actor.init(
    {
      actorName: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "actor",
      paranoid: true,
      timestamps: true,
      hooks: {
        beforeCreate: async (data) => {
          console.log("before create actor");
          if (data.actorName == "Raghav" || data.actorName == "Varun") {
            await actor.update({ where: {} });
          }
        },
      },
    }
  );

  //-------------------------Hooks practice -----------------------------

  // afterCreate hook
  actor.afterCreate(async (actor) => {
    console.log("New Actor Created");
    console.log(actor.actorName);
  });

  actor.beforeCreate(async () => {
    console.log("Creating Actorr");
  });

  return actor;
};
