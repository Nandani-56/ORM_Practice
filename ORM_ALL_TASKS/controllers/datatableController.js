const express = require("express");
const { Op, or, and } = require("sequelize");
const db = require("../models");
const repositoryData = require("../repositories/datatableRepository");

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

    console.log(sort_order);

    // searching
    const search = req.query.search["value"];

    // pagination
    const limit = Number(req.query.length);
    const start = Number(req.query.start);

    repositoryData.setModel(task);

    const { count, rows } = await repositoryData.fetchData(
      sort_order,
      limit,
      start,
      student,
      search,
      true
    );

    const totalCount = await repositoryData.fetchCount(student, true);

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
