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
    console.log(sortBy.split(".")[0]);

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

    var sort_order;
    if (sortBy.split(".")[0] == "Student") {
      sort_order = [["Student", sortBy.split(".")[1], order]];
    } else {
      sort_order = [[sortBy, order]];
    }

    const { count, rows } = await model.Task.findAndCountAll({
      attributes: ["title"],
      limit: limit ? limit : null,
      offset: start ? start : null,
      order: sort_order,

      include: {
        model: model.Student,
        where: search ? where : null,

        required: true,
        attributes: ["firstName", "age", "contactNumber", "id", "lastName"],
      },
    });

    //To return count of filtered rows
    console.log(count, "count");

    // To return count of total rows
    const totalCount = await model.Student.count({
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
