const { Sequelize, Op } = require("sequelize");
("use strict");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
      Actor.belongsToMany(models.Movie, {
        through: models.Movie_Actor,
        foreignKey: "actorId",
      });
    }
  }
  Actor.init(
    {
      actorName: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Actor",
      paranoid: true,
      timestamps: true,
    }
  );

  //-------------------------Hooks practice -----------------------------

  // afterCreate hook
  Actor.afterCreate(async (actor) => {
    console.log("New Actor Created");
    console.log(actor.actorName);
  });

  Actor.beforeCreate(async () => {
    console.log("Creating Actorr");
  });

  return Actor;
};
