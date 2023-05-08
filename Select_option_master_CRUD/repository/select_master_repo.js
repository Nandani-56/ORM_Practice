const { Op } = require("sequelize");
const db = require("../models");
const option_master = db.option_master;

const setModel = (model) => {
  this.model = model;
};

const getModel = (model) => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  // Insert data into select and option master
  insertData: async (data, includeModel) => {
    return await getModel().create(data, {
      include: [
        {
          model: includeModel,
        },
      ],
    });
  },

  // Read Data
  readData: async (id, includeModel) => {
    return await getModel().findAll({
      // attibutes: parentAttribute,
      include: {
        model: includeModel,
        // attibutes: childAttribute,
      },
      where: {
        id: id ? id : 5,
      },
    });
  },

  // Update select_master Data
  updateData: async (bodydata) => {
    await getModel().update(bodydata, {
      where: {
        id: bodydata.id,
      },
    });
  },

  //update option_master
  updateOptionMaster: async (bodydata, id) => {
    console.log(bodydata);
    console.log(id);
    await getModel().update(bodydata, {
      where: {
        id: id,
      },
    });
  },

  // insert data into option master for update
  insertOptionMaster: async (bodydata) => {
    await getModel().create(bodydata);
  },

  // delete option master records
  deleteData: async (id) => {
    await getModel().destroy({ where: { id: id } });
  },
};