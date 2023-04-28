const express = require("express");
const route = express.Router();
const polymorphicRoute = require("../controllers/polymorphicController");

// API to insert image
route.post("/polymorphicInsert/:modelName", polymorphicRoute.polymorphicInsert);

// API to insert comment
route.post("/comment/:type/:id", polymorphicRoute.insertComment);

// API to read video comment
route.get("/read-comment/:readComment", polymorphicRoute.readComment);


// API to delete image & image comment
route.delete("/polymorphicDelete/:deleteData/:id", polymorphicRoute.polymorphicDelete);



module.exports = route;

