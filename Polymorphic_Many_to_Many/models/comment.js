"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      // define association here
    }
  }
  comment.init(
    {
      post_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comment",
      // hooks : {
      //   beforeCreate : (comment)=>{
      //     comment.user_id = 3;
      //     comment.post_id = 9;
      //   },
      // },
    }
  );

  //Model based hooks

  comment.beforeCreate((comment) => {
    // comment.user_id = 3,
    (comment.post_id = 9), console.log("Before Create Comment");
  });

  // Global Hook
  sequelize.addHook("beforeCreate", (comment) => {
    comment.user_id = 3;
  });

  sequelize.addHook("afterFind", () => {
    console.log("Data Found!");
  });
  return comment;
};
