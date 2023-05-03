const express = require("express");
const { Op, or, and, where } = require("sequelize");
const db = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const country = db.country;
const capital = db.capital;

// API to insert data in one-to-one relationship   done
const oneToOneInsert = async (req, res) => {
  try {
    await country.create(
      {
        ...req.body,
        capital: [
          {
            ...req.body,
            countryId: country.id,
          },
        ],
      },
      {
        include: [{ model: capital }],
      }
    );
    res.json("inserted");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API to read data in one to one relationship   done
const oneToOneRead = async (req, res) => {
  try {
    let data = await country.findAll({
      attributes: ["countryName"],
      include: {
        model: capital,
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

// API to update data in one-to-one relationship   pending
const oneToOneUpdate = async (req, res) => {
  try {
    await country.update(req.body, {
      where: {
        id: req.params.id,
      },
      include: [{ model: capital }, { where: { countryId: req.params.id } }],
    });

    res.json("updated");
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// API to delete data in one to one relationship  done
const oneToOneDelete = async (req, res) => {
  try {
    await country.destroy({
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
