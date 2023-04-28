'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("basic_media", "post_id", {
      type: Sequelize.INTEGER,
      references : {
        model : "posts",
        key : "id",
        as:"post_id"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("basic_media", "post_id", {
      type: Sequelize.INTEGER,
    });
  }
};
