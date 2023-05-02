const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and } = require("sequelize");
const model = require("../models");

// Render table using ejs
const render = async (req, res) => {
  res.render("datatable.ejs");
};

// Pagination sorting searching
const getData = async (req, res) => {
  try {
    console.log(req.query);

    // sorting
    var column_index = req.query.order[0].column;
    var sortBy = req.query.columns[column_index]["data"];
    var order = req.query.order[0]["dir"];

    // pagination
    const limit = Number(req.query.length);
    const start = Number(req.query.start);

    // searching
    const search = req.query.search["value"];
    const where = {};

    if (search) {
      where[Op.or] = [
        {
          firstName: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          age: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          contactNumber: {
            [Op.like]: `%${search}%`,
          },
        },
      ];
    }

    console.log(where, "where");

    const { count, rows } = await model.Student.findAndCountAll({
      where: search ? where : null,
      distinct: true,
      attributes: ["firstName", "age", "contactNumber", "id"],
      limit: limit ? limit : null,
      offset: start ? start : null,
      order: [[sortBy, order]],
      include: {
        model: model.Task,
        required: true,
        attributes: ["title"],
      },
    });

    //To return count of filtered rows
    console.log(count, "count");

    // To return count of total rows
    const totalCount = await model.Student.count({
      distinct: true,
      include: {
        model: model.Task,
        required: true,
      },
    });

    return res.json({
      recordsTotal: totalCount,
      recordsFiltered: count,
      data: rows,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getData,
  render,
};
