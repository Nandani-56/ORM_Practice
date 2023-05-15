const express = require("express");
const formRoute = require("../controller/form_controller");
const route = express.Router();

route.get("/form", formRoute.renderForm);

route.post("/insertMultipleData",formRoute.insertMultipleSelectMasterData);


module.exports = route;
