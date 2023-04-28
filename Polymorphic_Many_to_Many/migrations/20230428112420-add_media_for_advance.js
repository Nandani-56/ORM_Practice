'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("advance_media", "media_for", {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("advance_media", "media_for", {
      type: Sequelize.STRING,
    });
  }
};
