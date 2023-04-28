const express = require("express");
const { Model } = require("sequelize");
const route = express.Router();

const oneToOneRoute = require("../controllers/oneToOneController");

// API for one to one insert
route.post("/one-to-one-insert", oneToOneRoute.oneToOneInsert);

// API for one to one read
route.get("/one-to-one-read", oneToOneRoute.oneToOneRead);

// API for one to one update
route.put("/one-to-one-update/:id", oneToOneRoute.oneToOneUpdate);

// API for one to one delete
route.delete("/one-to-one-delete/:id", oneToOneRoute.oneToOneDelete);

module.exports = route;
