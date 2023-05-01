const express = require("express");
const route = express.Router();
const studentRoute = require("../controllers/studentController");

// API to get all data
route.get("/displayStudentData", studentRoute.displayData);

route.get("/display", studentRoute.render);

// API to insert data
route.post("/insertStudentData", studentRoute.insert);

// API to update data
route.put("/updateStudentData/:id", studentRoute.updateData);

// API to delete data
route.delete("/deleteStudentData/:id", studentRoute.deleteData);

// API for pagination
route.get("/pagination", studentRoute.pagination);

// API for paginationUsingCount
route.get("/paginationUsingCount/:no", studentRoute.paginationUsingCount);

// API for sorting
route.get("/sorting", studentRoute.sorting);

// API for search
route.get("/search", studentRoute.search);

// API for restoring the deleted data
route.put("/restore/:id", studentRoute.restoreData);

// single API for pagination , searching , sorting
route.get("/tasks/:task", studentRoute.paginationSearchSort);

module.exports = route;
