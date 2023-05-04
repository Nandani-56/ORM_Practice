const express = require("express");
const { Op, or, and, QueryTypes, Model, sequelize } = require("sequelize");
const db = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = db.user;
const post = db.post;
const comment = db.comment;
const basic_media = db.basic_media;
const advance_media = db.advance_media;
const post_media_comment = db.post_media_comment;

const insertUser = async (req, res) => {
  try {
    await user.create(req.body);
    res.json("inserted user!");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

// const insertPost = async (req, res) => {
//   try {
//     const posts = await post.create(req.body);
//     await posts.addBasic_media()
//   } catch (err) {
//     console.log(err);
//     res.json("err");
//   }
// };

const insertData = async (req, res) => {
  try {
    await db.sequelize.transaction(async (t) => {
      await post.create(
        {
          ...req.body,

          // comments: [{ ...req.body }],
          // basic_media: [{ ...req.body }],
          // advance_media: [{ ...req.body }],
        },
        {
          include: [
            { model: comment },
            { model: basic_media },
            { model: advance_media },
          ],
        },
        { transaction: t }
      );
      // await t.commit();
      res.json("inserted!");
    });
  } catch (err) {
    console.log(err);
    res.json("err");
    // await t.rollback();
  }
};

// const insertData = async (req, res) => {
//   if (req.params.actionType == "post") {
//     let postData = await model.post.create(req.body);
//     if (postData) {
//       if (req.params.mediaType == "image" || req.params.mediaType == "video") {
//         let basic_media = await model.basic_media.create({
//           media_url: req.body.media_url,
//           user_id: req.body.user_id,
//           media_type: req.params.mediaType,
//           post_id: postData.id,
//           media_for : "post"
//         });
//         if (basic_media) {
//           await model.post_media_comment.create({
//             action_type: req.params.actionType,
//             action_id: postData.id,
//             attachement_type: "basic_media",
//             attachment_id: basic_media.id,
//           });
//         }
//       }
//       if (req.params.mediaType == "zip" || req.params.mediaType == "exe") {
//         let advance_media = await model.advance_media.create({
//           media_url: req.body.media_url,
//           media_type: req.params.mediaType,
//           user_id: req.body.user_id,
//           post_id: postData.id,
//           media_for : "post"
//         });
//         if (advance_media) {
//           await model.post_media_comment.create({
//             action_type: req.params.actionType,
//             action_id: postData.id,
//             attachement_type: "advance_media",
//             attachment_id: advance_media.id,
//           });
//         }
//       }
//     }

//     res.json("inserted!!");
//   }

//   if (req.params.actionType == "comment") {
//     let commentData = await model.comment.create(req.body);
//     if (commentData) {
//       if (req.params.mediaType == "image" || req.params.mediaType == "video") {
//         let basic_media = await model.basic_media.create({
//           media_url: req.body.media_url,
//           media_type: req.params.mediaType,
//           user_id: req.body.user_id,
//           post_id: req.body.post_id,
//           media_for : "comment"
//         });
//         if (basic_media) {
//           await model.post_media_comment.create({
//             action_type: req.params.actionType,
//             action_id: commentData.id,
//             attachement_type: "basic_media",
//             attachment_id: basic_media.id,
//           });
//         }
//       }
//       if (req.params.mediaType == "zip" || req.params.mediaType == "exe") {
//         let advance_media = await model.advance_media.create({
//           media_url: req.body.media_url,
//           media_type: req.params.mediaType,
//           user_id: req.body.user_id,
//           post_id: req.body.post_id,
//           media_for : "comment"
//         });
//         if (advance_media) {
//           await model.post_media_comment.create({
//             action_type: req.params.actionType,
//             action_id: commentData.id,
//             attachement_type: "advance_media",
//             attachment_id: advance_media.id,
//           });
//         }
//       }
//     }

//     res.json("inserted!!");
//   }
// };

const seePost = async (req, res) => {
  try {
    let posts = await post.findAll({
      include: [
        {
          model: user,
          attributes: ["name"],
        },
        {
          model: comment,
          attributes: ["comment"],
        },
        {
          model: basic_media,
          attributes: ["media_url", "media_type", "media_for"],
        },
        {
          model: advance_media,
          attributes: ["media_url", "media_type", "media_for"],
        },
      ],
    });

    res.json({ posts });
  } catch (err) {
    console.log(err);
    res.json("err");
  }
};

const readAttachment = async (req, res) => {
  let attachment = await post_media_comment.findAll();
  res.json(attachment);
};

// const deleteData = async(req,res)=>{
//   await model.post.destroy({
//     where : {
//       id : req.params.id
//     }
//   })

//   res.json("Deleted!");
// }

module.exports = {
  insertUser,
  insertData,
  seePost,
  readAttachment,
};
