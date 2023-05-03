const express = require("express");
const { Op, or, and } = require("sequelize");
const db = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const task = db.task;
const student = db.student;

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

    if (sortBy.split(".")[0] == "student") {
      sort_order = [["student", sortBy.split(".")[1], order]];
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
      ];
    }

    const { count, rows } = await task.findAndCountAll({
      attributes: ["title"],
      limit: limit ? limit : null,
      offset: start ? start : null,
      order: sort_order,
      where: search ? where : null,
      include: {
        model: student,
        required: true,
        attributes: ["firstName", "age", "contactNumber", "id", "lastName"],
      },
    });

    //To return count of filtered rows
    console.log(count, "count");

    // To return count of total rows
    const totalCount = await student.count({
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
