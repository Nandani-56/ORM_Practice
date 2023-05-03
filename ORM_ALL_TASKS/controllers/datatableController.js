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

// Pagination , sorting , searching , All Records
const getData = async (req, res) => {
  try {
    console.log(req.query);

    // sorting
    var column_index = req.query.order[0].column;
    var sortBy = req.query.columns[column_index]["data"];
    var order = req.query.order[0]["dir"];

    console.log(sortBy.split(".")[0]);

    let sort_order;

    if (sortBy.split(".")[0] == "Student") {
      sort_order = [["Student", sortBy.split(".")[1], order]];
    } else {
      sort_order = [[sortBy, order]];
    }

    // pagination
    const limit = Number(req.query.length);
    const start = Number(req.query.start);

    // searching
    const search = req.query.search["value"];
    const where = {};

    
    // "$Student.firstName$" --> This syntax is used to search in the child table
    if (search) {
      where[Op.or] = [
        {
          "$Student.firstName$": {
            [Op.like]: `%${search}%`,
          },
        },
        {
          "$Student.lastName$": {
            [Op.like]: `%${search}%`,
          },
        },
        {
          "$Student.age$": {
            [Op.like]: `%${search}%`,
          },
        },
        {
          "$Student.contactNumber$": {
            [Op.like]: `%${search}%`,
          },
        },
        {
          title: {
            [Op.like]: `%${search}%`,
          },
        },
      ];
    }

    const { count, rows } = await model.Task.findAndCountAll({
      attributes: ["title"],
      limit: limit ? limit : null,
      offset: start ? start : null,
      order: sort_order,
      where: search ? where : null,
      include: {
        model: model.Student,
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
