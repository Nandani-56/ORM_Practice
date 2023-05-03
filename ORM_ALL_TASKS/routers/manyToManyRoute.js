const express = require("express");
const route = express.Router();

const manyToManyRoute = require("../controllers/manyToManyController");

// API to insert data
route.post("/insert",manyToManyRoute.insertData);

// API to read data
route.get("/actor-movie-read", manyToManyRoute.actorMovieRead);

// API to update actormovie
// route.put("/actor-movie-update/:id", manyToManyRoute.actorMovieUpdate);

// API to delete data
route.delete("/delete/:id", manyToManyRoute.actorMovieDelete);

// API to restore actormovie
// route.get("/actor-movie-restore/:id", manyToManyRoute.actorMovieRestore);

// API for scope
// route.get("/scope", manyToManyRoute.scopePractice);

module.exports = route;
