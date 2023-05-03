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
  // try {
  //   let data = await movie.create(req.body);

  //   const data1 = await actor.findAll({
  //     where : { actorName : req.body.actors[0].actorName},
  //   })

  //   await actor.addMovie(data1,{through : movie_actor});
  //   res.json(data);
  // } catch (err) {
  //   console.log(err);
  //   res.json("err");
  // }

  // const actorlist = await actor.findAll({
  //   where: { actorName: req.body.actors[0].actorName },
  // });

  // if (actorlist) {
  await movie.create({
    movieName: "ABsCDze",
    createdAt: "2023-05-03T09:39:13.000Z",
    updatedAt: "2023-05-03T09:55:26.000Z",
    deletedAt: null,
    actors: [
      {
        id: 2,
        actorName: "Varun",
        createdAt: "2023-05-03T09:38:40.000Z",
        updatedAt: "2023-05-03T09:38:40.000Z",
        deletedAt: null,
        movie_actor: {
          id: 4,
          movieId: 3,
          actorId: 2,
          createdAt: "2023-05-03T09:39:13.000Z",
          updatedAt: "2023-05-03T09:39:13.000Z",
          deletedAt: null,
        },
      },
      {
        id: 1,
        actorName: "Raghav",
        createdAt: "2023-05-03T09:38:40.000Z",
        updatedAt: "2023-05-03T09:38:40.000Z",
        deletedAt: null,
        movie_actor: {
          id: 3,
          movieId: 3,
          actorId: 1,
          createdAt: "2023-05-03T09:39:13.000Z",
          updatedAt: "2023-05-03T09:39:13.000Z",
          deletedAt: null,
        },
      },
    ],
  });
};
// };

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
