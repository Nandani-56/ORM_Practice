const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Op, or, and } = require("sequelize");
const model = require("../models");

// API to insert data into images table
const polymorphicInsert = async (req, res) => {
  if (req.params.modelName == "image") {
    try {
      await model.image.create(req.body);
      res.json("inserted!!");
    } catch (err) {
      console.log(err);
      res.json("err");
    }
  }

  if (req.params.modelName == "video") {
    try {
      await model.video.create(req.body);
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
    await model.comment.create({
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
      let data = await model.video.findAll({
        include: [
          {
            model: model.comment,
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
      let data = await model.image.findAll({
        include: [
          {
            model: model.comment,
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
      await model.image
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then(async () => {
          await model.comment.destroy({
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
      await model.video
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then(async () => {
          await model.comment.destroy({
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
