const express = require("express");

const db = require("../models");
const {
  setModel,
  insertData,
  readData,
  updateData,
  updateOptionMaster,
  insertOptionMaster,
  deleteData,
} = require("../repository/select_master_repo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const selectMaster = db.select_master;
const optionMaster = db.option_master;

// Insert Data into select and option master
const insertSelectMasterData = async (req, res) => {
  setModel(selectMaster);
  let HTMLString = "";

  const data = await insertData(req.body, optionMaster);
  let s = data.controllerType;
  let s1 = s.toLowerCase();
  console.log(s1);
  if (s1 == "dropdown") {
    HTMLString += `<select> <option selected disabled>Select ${data.name}</option>`;
    for (i = 0; i < data.option_masters.length; i++) {
      HTMLString += ` <option value="${data.option_masters[i].optionValue}"> ${data.option_masters[i].optionValue}</option>`;
    }
    HTMLString += `</select>`;
  } else if (s1 == "radiobutton") {
    for (i = 0; i < data.option_masters.length; i++) {
      HTMLString += `<input type = "radio" name="radiobtn">${data.option_masters[i].optionValue} `;
    }
  } else if (s1 == "checkbox") {
    for (i = 0; i < data.option_masters.length; i++) {
      HTMLString += `<input type = "checkbox" name="radiobtn">${data.option_masters[i].optionValue} `;
    }
  }
  console.log(HTMLString);
  return res.send(HTMLString);
};

// Read data
const parentAttribute = ["name", "controllerType", "allowMultiple"];
const childAttribute = ["optionValue"];
const readSelectMasterData = async (req, res) => {
  setModel(selectMaster);
  const data = await readData(
    req.query.id,
    optionMaster,
    parentAttribute,
    childAttribute
  );
  // console.log(data[0].option_masters.length);
  return res.json(data);
};

// update select master
const updateSelectMasterData = async (req, res) => {
  setModel(selectMaster);
  await updateData(req.body, req.params.id);
  return res.json("updated!!");
};

// update option master
const updateOptionMasterData = async (req, res) => {
  setModel(optionMaster);
  console.log(req.body.length);
  for (i = 0; i < req.body.length; i++) {
    const data = await optionMaster.findByPk(req.body[i].id);
    console.log(data, "data");
    if (data) {
      await updateOptionMaster(req.body[i], req.body[i].id);
    } else {
      await insertOptionMaster(req.body[i]);
    }
  }
  return res.json("Updated!!");
};

// delete option master data
const deleteOptionMasterData = async (req, res) => {
  setModel(optionMaster);
  await deleteData(req.params.id);
  return res.send("Deleted!!");
};

// Delete data from select master
const deleteSelectMasterData = async (req, res) => {
  setModel(selectMaster);
  await deleteData(req.params.id);
  return res.send("Deleted!!");
};

module.exports = {
  insertSelectMasterData,
  updateOptionMasterData,
  updateSelectMasterData,
  readSelectMasterData,
  deleteOptionMasterData,
  deleteSelectMasterData,
};
