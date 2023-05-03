const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and, QueryTypes } = require("sequelize");

const db = require("../models");
const actor = db.Actor;
const movie = db.Movie;

// Insert Data
const manyToManyInsert = async (req, res) => {
  if (req.params.modelName == "Actor") {
    try {
      await model.Actor.create(req.body);
      res.json("inserted!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.modelName == "Movie") {
    try {
      await model.Movie.create(req.body);
      res.json("inserted!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.modelName == "movieActor") {
    try {
      await model.Movie_Actor.findOrCreate({
        where: {
          actorId: req.body.actorId,
          movieId: req.body.movieId,
        },
      });
      res.json("inserted!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }
};

// Insert data
const insertData = async (req, res) => {
  try {
    await movie.create(
      {
        movieName: "ABCD",
        actor: [
          {
            actorName: "Siddharth",
          },
          {
            actorName: "Varun",
          },
        ],
      },
      {
        include: [{model:actor}],
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// Read Data
const actorMovieRead = async (req, res) => {
  // try {
  //   const data = await model.Movie_Actor.findAll({
  //     attributes: [],
  //     include: [
  //       {
  //         model: model.Movie,
  //         attributes: ["movieName"],
  //       },
  //       {
  //         model: model.Actor,
  //         attributes: ["actorName"],
  //       },
  //     ],
  //     order: ["movieId"],
  //   });
  //   res.json(data);
  // } catch (err) {
  //   console.log(err);
  //   res.json("err");
  // }

  const result = await movie.findOne({
    where: { movieName: 'Student of the Year' },
    include: actor
  });
  res.json(result)
};





// delete
const actorMovieDelete = async (req, res) => {
  if (req.params.delete == "Actor") {
    try {
      await model.Movie_Actor.destroy({
        where: {
          actorId: req.params.id,
        },
      });
      await model.Actor.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json("Deleted!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.delete == "Movie") {
    try {
      await model.Movie_Actor.destroy({
        where: {
          actorId: req.params.id,
        },
      });
      await model.Movie.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json("Deleted!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }
};

// Scope practice
const scopePractice = async (req, res) => {
  try {
    let data = await model.Movie_Actor.scope(
      "agreater",
      "mgreater",
      "scope1"
    ).findAll({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

module.exports = {
  manyToManyInsert,
  actorMovieRead,
  actorMovieDelete,
  insertData,
};
