const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and } = require("sequelize");
const model = require("../models");

// API to insert data in one-to-one relationship
const oneToOneInsert = async (req, res) => {
  try {
    let data = await model.Country.create(req.body);

    if (data) {
      await model.Capital.create({
        capitalName: req.body.capitalName,
        countryId: data.id,
      });
    }
    res.json("inserted");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API to read data in one to one relationship
const oneToOneRead = async (req, res) => {
  try {
    let data = await model.Country.findAll({
      attributes: ["countryName"],
      include: {
        model: model.Capital,
        required: true,
        attributes: ["capitalName"],
      },
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API to update data in one-to-one relationship
const oneToOneUpdate = async (req, res) => {
  console.log(req.body.countryName);
  console.log(req.body.capitalName);
  try {
    await model.Country.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    await model.Capital.update(req.body, {
      where: {
        countryId: req.params.id,
      },
    });

    res.json("updated");
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// API to delete data in one to one relationship
const oneToOneDelete = async (req, res) => {
  try {
    await model.Country.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("Deleted");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

module.exports = {
  oneToOneInsert,
  oneToOneRead,
  oneToOneUpdate,
  oneToOneDelete,
};
