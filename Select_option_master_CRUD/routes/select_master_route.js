const express = require("express");
const route = express.Router();

const selectMasterRoute = require("../controller/select_master_controller");

// insert data into select and option master
route.post("/insertData", selectMasterRoute.insertSelectMasterData);

// read data
route.get("/readData", selectMasterRoute.readSelectMasterData);

// update select master
route.put("/updateSelectMasterData", selectMasterRoute.updateSelectMasterData);

// update option master
route.put("/updateOptionMasterData", selectMasterRoute.updateOptionMasterData);

// delete option master data
route.delete(
  "/deleteOptionMasterData/:id",
  selectMasterRoute.deleteOptionMasterData
);

// delete student master data
route.delete(
  "/deleteSelectMasterData/:id",
  selectMasterRoute.deleteSelectMasterData
);

module.exports = route;
