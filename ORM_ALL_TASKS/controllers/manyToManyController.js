const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and, QueryTypes } = require("sequelize");

const db = require("../models");
const actor = db.actor;
const movie = db.movie;
const movie_actor = db.movie_actor;

// Insert data
const insertData = async (req, res) => {
  try {
    await movie.create(req.body, {
      include: [{ model: actor }],
    });
    res.json("inserted!!!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// Read Data  done
const actorMovieRead = async (req, res) => {
  const result = await movie.findAll({
    include: actor,
  });
  res.json(result);
};

// delete  done
const actorMovieDelete = async (req, res) => {
  try {
    await movie_actor.destroy({
      where: {
        movieId: req.params.id,
      },
    });
    await movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("Deleted!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// Scope practice
const scopePractice = async (req, res) => {
  try {
    let data = await movie_actor
      .scope("agreater", "mgreater", "scope1")
      .findAll({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

module.exports = {
  actorMovieRead,
  actorMovieDelete,
  insertData,
};
