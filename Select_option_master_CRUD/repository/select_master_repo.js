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

  // Insert data into select and option master
  insertData: async (data, includeModel) => {
    console.log(getModel());
    return await getModel().create(data, {
      include: [
        {
          model: includeModel,
        },
      ],
    });
  },

  // Read Data
  readData: async (id, includeModel, parentAttribute, childAttribute) => {
    return await getModel().findAll({
      attibutes: [parentAttribute],
      include: {
        model: includeModel,
        attibutes: childAttribute,
      },
      where: {
        id: id ? id : 11,
      },
    });
  },

  // Update select_master Data
  updateData: async (bodydata, id) => {
    await getModel().update(bodydata, {
      where: {
        id: id,
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
