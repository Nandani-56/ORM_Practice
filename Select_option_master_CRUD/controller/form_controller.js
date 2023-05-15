const express = require("express");

const db = require("../models");
const { setModel, insertData, getModel } = require("../repository/form_repo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const form = db.form;
const form_detail = db.form_detail;

const renderForm = async (req, res) => {
  res.render("form.ejs");
};

module.exports = {
  renderForm,
};
