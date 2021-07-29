const router = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload,
} = require("../../routes/middlewares");
const { Post, User, Comment } = require("../../models");

const createProjectAPI = async (req, res) => {
  if (req.file) {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      mood: req.body.mood,
      lyrics_text: req.body.lyrics_text,
      audioFile: req.file.location,
      music_field: req.body.music_field,
      lyrics_field: req.body.lyrics_field,
      instrument_field: req.body.instrument_field,
      uid: req.user.id,
    });
    if (!post) {
      res.status(400).json({
        success: false,
        post: post,
      });
    } else {
      res.status(200).json({
        sucess: true,
        post: post,
      });
    }
  } else {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      mood: req.body.mood,
      lyrics_text: req.body.lyrics_text,
      music_field: req.body.music_field,
      lyrics_field: req.body.lyrics_field,
      instrument_field: req.body.instrument_field,
      uid: req.user.id,
    });
    if (!post) {
      res.status(400).json({
        sucess: false,
      });
    } else {
      res.status(200).json({
        sucess: true,
        post: post,
      });
    }
  }
};

const mainInfoAPI = async (req, res) => {
  const maininfo = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
    attributes: [
      "id",
      "title",
      "music_field",
      "lyrics_field",
      "instrument_field",
      "genre",
      "mood",
      "audioFile",
      "lyrics_text",
    ],
  });
  res.set({ "access-control-allow-origin": "*" });
  if (!maininfo) {
    res.status(400).json({
      success: false,
    });
  } else {
    res.status(200).json({ maininfo: maininfo });
  }
};

const commentsAPI = async (req, res, next) => {
  let id = req.params.id;
  try {
    const comments = await Comment.findAll({
      where: { uid: id },
    });
    const project = await Post.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ["introduce", "email"],
        },
      ],
    });
    res.status(200).json({ comments, project });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProjectAPI: createProjectAPI,
  mainInfoAPI: mainInfoAPI,
  commentsAPI: commentsAPI,
};
