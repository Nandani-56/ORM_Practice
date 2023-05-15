const express = require("express");
const formRoute = require("../controller/form_controller");
const route = express.Router();

route.get("/form", formRoute.renderForm);



module.exports = route;
