const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and } = require("sequelize");
const model = require("../models");



// API to fetch data in one-to-many relationship
const oneToManyRead = async (req, res) => {
  try {
    let data = await model.Student.findAll({
      attributes: ["firstName", "age", "contactNumber", "id","lastName"],
      include: {
        model: model.Task,
        required: true,
        attributes: ["title"],
      },
    });
    // console.log(data[0].Tasks);
    // res.render("datatable.ejs",{data:data})
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// API to insert data in one-to-many relationship
const oneToManyInsert = async (req, res) => {
  try {
    await model.Task.create({
      ...req.body,
      userId : req.params.id
    });
    res.json("Inserted!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};


// API tp update data in one-to-many relationship
const oneToManyUpdate = async (req, res) => {
  try {
    await model.Student.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then(async () => {
      await model.Task.update(req.body, {
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

// API to delete data in one-to-one relationship
const oneToManyDelete = async (req, res) => {
  try {
    await model.Student.destroy({
      where: {
        id: req.params.id,
      },
    }).then(async () => {
      await model.Task.destroy({
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








