const express = require("express");
const route = express.Router();

const oneToManyRoute = require("../controllers/oneToManyController");

// API for one to many read
route.get("/one-to-many-read", oneToManyRoute.oneToManyRead);

// API for one to many read
route.post("/one-to-many-insert", oneToManyRoute.oneToManyInsert);

// API for one to many update
route.put("/one-to-many-update/:id", oneToManyRoute.oneToManyUpdate);

// API for one to many delete
route.delete("/one-to-many-delete/:id", oneToManyRoute.oneToManyDelete);

module.exports = route;
