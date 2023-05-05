const express = require("express");
const { Op, or, and } = require("sequelize");
const db = require("../models");
const {
  setModel,
  getModel,
  displayData: displaySData,
  displaySingleData,
  insertData,
} = require("../repositories/studentRepository");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const student = db.student;

setModel(student);

// API to get all the records
const displayData = async (req, res) => {
  const displayStudentData = await displaySData();
  return res.json(displayStudentData);

  // const name = "Nandani";
  // const dsd = await displaySingleData(name);
  // return res.json(dsd);
};

// API to insert data
const insert = async (req, res) => {
  await insertData(req.body);
  return res.json("Inserted!");
};

// API to delete data
const deleteData = async (req, res) => {
  try {
    await student.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Deleted");
  } catch (err) {
    console.log(err);
    res.status(404).json("err");
  }
};

//API to update data
const updateData = async (req, res) => {
  try {
    await student.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });

    res.json("updated");
  } catch (err) {
    console.log(err);
    res.json("Err");
  }
};

// -----------------Single API for Pagination, searching and sorting-------------------------------------------//

const paginationSearchSort = async (req, res) => {
  // Pagination
  try {
    if (req.params.task == "pagination") {
      try {
        let pageno = Math.abs(req.params.no) || 1;
        console.log(pageno);
        let limit = 10;
        let offset = (pageno - 1) * limit || 0;
        console.log(offset);
        let pagination_data = await student.findAll({
          raw: true,
          limit: limit,
          offset: (pageno - 1) * limit || 0,
        });

        if (data.length > 0) {
          res.json(data);
        } else {
          res.json("OOPS no data found!");
        }
      } catch (err) {
        console.log(err);
        res.json("Error");
      }
    }

    // searching

    if (req.params.task == "search") {
      let fname = req.query.firstName || "";
      let lname = req.query.lastName || "";
      let age = req.query.age || "";
      let contactNumber = req.query.contactNumber || "";
      let operator = req.query.operator || "and";

      try {
        let searchedData = await student.findAll({
          where: {
            [Op.and]: [
              {
                firstName: {
                  [Op.like]: `%${fname}%`,
                },
              },
              {
                lastName: {
                  [Op.like]: `%${lname}%`,
                },
              },
              {
                age: {
                  [Op.like]: `%${age}%`,
                },
              },
              {
                contactNumber: {
                  [Op.like]: `%${contactNumber}%`,
                },
              },
            ],
          },
        });

        if (searchedData.length > 0) {
          res.json(searchedData);
        } else {
          res.json("OOPS no data found!");
        }
      } catch (err) {
        console.log(err);
        res.json("ERRR");
      }
    }

    // sorting
    if (req.params.task == "sort") {
      try {
        let sortedData = await student.findAll({
          order: [[req.query.colName || "id", req.query.order || "ASC"]],
        });
        res.json(sortedData);
      } catch (err) {
        console.log(err);
        res.json("err");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("Please enter valid task!");
  }
};

// -----------------Individual API for Pagination, searching and sorting-------------------------------------------//

// API for pagination
const pagination = async function (req, res) {
  try {
    let pageno = Math.abs(req.params.no) || 1;
    console.log(pageno);
    let limit = 10;
    let offset = (pageno - 1) * limit || 0;
    console.log(offset);
    let data = await student.findAll({
      raw: true,
      limit: limit,
      offset: (pageno - 1) * limit || 0,
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.json("OOPS no data found!");
    }
  } catch (err) {
    console.log(err);
    res.json("Error");
  }
};

// API for pagination using count
const paginationUsingCount = async function (req, res) {
  try {
    let pageno = Math.abs(req.query.no) || 1;
    console.log(pageno);
    let limit = 10;
    let offset = (pageno - 1) * limit || 0;
    console.log(offset);
    const { count, rows } = await student.findAndCountAll({
      raw: true,
      limit: limit,
      group: ["firstName"],
      offset: (pageno - 1) * limit || 0,
    });

    console.log(count);
    // console.log(rows);
    if (rows.length > 0) {
      res.json(rows);
    } else {
      res.json("OOPS no data found!");
    }
  } catch (err) {
    console.log(err);
    res.json("Error");
  }
};

// API for searching
const search = async function (req, res) {
  let fname = req.query.firstName || "";
  let lname = req.query.lastName || "";
  let age = req.query.age || "";
  let contactNumber = req.query.contactNumber || "";
  let operator = req.query.operator || "and";

  if (operator == "or") {
    try {
      let searchedData = await student.findAll({
        where: {
          [Op.or]: [
            {
              firstName: {
                [Op.like]: `${fname}`,
              },
            },
            {
              lastName: {
                [Op.like]: `${lname}`,
              },
            },
            {
              age: {
                [Op.like]: `${age}`,
              },
            },
            {
              contactNumber: {
                [Op.like]: `${contactNumber}`,
              },
            },
          ],
        },
      });

      if (searchedData.length > 0) {
        res.json(searchedData);
      } else {
        res.json("OOPS no data found!");
      }
    } catch (err) {
      console.log(err);
      res.json("ERRR");
    }
  } else {
    try {
      let searchedData = await student.findAll({
        where: {
          [Op.and]: [
            {
              firstName: {
                [Op.like]: `%${fname}%`,
              },
            },
            {
              lastName: {
                [Op.like]: `%${lname}%`,
              },
            },
            {
              age: {
                [Op.like]: `%${age}%`,
              },
            },
            {
              contactNumber: {
                [Op.like]: `%${contactNumber}%`,
              },
            },
          ],
        },
      });

      if (searchedData.length > 0) {
        res.json(searchedData);
      } else {
        res.json("OOPS no data found!");
      }
    } catch (err) {
      console.log(err);
      res.json("ERRR");
    }
  }
};

// API for sorting
const sorting = async function (req, res) {
  try {
    let sortedData = await student.findAll({
      order: [[req.query.colName || "id", req.query.order || "ASC"]],
    });
    res.json(sortedData);
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API for restoring the soft deleted fields
const restoreData = async function (req, res) {
  try {
    await student.restore({
      where: {
        id: req.params.id,
      },
    });
    res.json("restored!");
  } catch {
    res.json("err");
  }
};

module.exports = {
  displayData,
  sorting,
  search,
  pagination,
  insert,
  deleteData,
  updateData,
  restoreData,
  paginationUsingCount,
  paginationSearchSort,
};
