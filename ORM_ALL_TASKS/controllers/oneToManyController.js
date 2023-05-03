const express = require("express");
const { Op, or, and } = require("sequelize");
const db = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const student = db.student;
const task = db.task;

// API to fetch data in one-to-many relationship   done
const oneToManyRead = async (req, res) => {
  try {
    let data = await student.findAll({
      attributes: ["firstName", "age", "contactNumber", "id", "lastName"],
      include: {
        model: task,
        required: true,
        attributes: ["title"],
      },
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// API to insert data in one-to-many relationship  done
const oneToManyInsert = async (req, res) => {
  try {
    await student.create(req.body, {
      include: [{ model: task }],
    });
    res.json("Inserted!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API tp update data in one-to-many relationship  pending
const oneToManyUpdate = async (req, res) => {
  try {
    await student
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then(async () => {
        await task.update(req.body, {
          where: {
            userId: req.params.id,
            id: 1,
          },
        });
      });

    res.json("Updated!!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API to delete data in one-to-one relationship  pending
const oneToManyDelete = async (req, res) => {
  try {
    await student
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(async () => {
        await task.destroy({
          where: {
            UserId: req.params.id,
          },
        });
      });
    res.json("Deleted");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

module.exports = {
  oneToManyRead,
  oneToManyInsert,
  oneToManyUpdate,
  oneToManyDelete,
};
