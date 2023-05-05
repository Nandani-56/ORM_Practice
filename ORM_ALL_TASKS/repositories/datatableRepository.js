const { Op } = require("sequelize");

module.exports.setModel = (model) => {
  this.model = model;
};

module.exports.getModel = () => {
  return this.model;
};

module.exports.fetchData = (
  order,
  limit,
  offset,
  include,
  search,
  required
) => {
  return this.getModel()
    .findAndCountAll({
      order,
      offset,
      limit,
      where: {
        [Op.or]: [
          {
            "$student.firstName$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            "$student.lastName$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            "$student.age$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            "$student.contactNumber$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            title: {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      },
      include: [{ model: include, required: required }],
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.fetchCount = (include, required) => {
  return this.getModel()
    .count({
      include: {
        model: include,
        required: required,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
