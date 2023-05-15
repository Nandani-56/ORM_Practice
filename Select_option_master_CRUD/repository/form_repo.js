const { Op } = require("sequelize");
const db = require("../models");

const setModel = (model) => {
  this.model = model;
};

const getModel = (model) => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  insertData: async (bodydata) => {
    await getModel().bulkCreate([bodydata]);
  },
};
