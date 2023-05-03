const express = require("express");
const { Op, or, and } = require("sequelize");
const db = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const image = db.image;
const video = db.video;
const comment = db.comment;

// API to insert data into images table 
const polymorphicInsert = async (req, res) => {
  if (req.params.modelName == "image") {
    try {
      await image.create(req.body);
      res.json("inserted!!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.modelName == "video") {
    try {
      await video.create(req.body);
      res.json("inserted!!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }
};

// API to insert comment
const insertComment = async (req, res) => {
  try {
    await comment.create({
      commentableId: req.params.id,
      commentableType: req.params.type,
      title: req.body.title,
    });
    res.json("inserted!!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// API to read comment
const readComment = async (req, res) => {
  if (req.params.readComment == "video") {
    try {
      let data = await video.findAll({
        include: [
          {
            model: comment,
            attributes: ["title"],
          },
        ],
      });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.readComment == "image") {
    try {
      let data = await image.findAll({
        include: [
          {
            model: comment,
            attributes: ["title"],
          },
        ],
      });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }
};

const polymorphicDelete = async (req, res) => {
  if (req.params.deleteData == "image") {
    try {
      await image
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then(async () => {
          await comment.destroy({
            where: {
              commentableId: req.params.id,
              commentableType: "image",
            },
          });
        });

      res.json("deleted");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.deleteData == "video") {
    try {
      await video
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then(async () => {
          await comment.destroy({
            where: {
              commentableId: req.params.id,
              commentableType: "video",
            },
          });
        });

      res.json("deleted");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }
};

module.exports = {
  polymorphicInsert,
  insertComment,
  readComment,
  polymorphicDelete,
};
