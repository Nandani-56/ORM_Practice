const { Op } = require("sequelize");

const setModel = (model) => {
  this.model = model;
};

const getModel = (model) => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,
  displayData: async () => {
    return await getModel()
      .findAll()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  displaySingleData: async (name) => {
    return await getModel()
      .findOne({
        where: {
          firstName: name,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  insertData: async (data) => {
    return await getModel()
      .create(data)
      .then(() => {
        console.log("Inserted");
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};
