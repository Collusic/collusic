const router = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload,
} = require("../../routes/middlewares");
const { Post, User } = require("../../models");
//field값

const createProjectAPI = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    mood: req.body.mood,
    lyrics_text: req.body.lyrics_text,
    audioFile: req.file.originalname,
    music_field: req.body.music_field,
    lyrics_field: req.body.lyrics_field,
    instrument_field: req.body.instrument_field,
  });
  if (!post) {
    res.status(400).json({
      success: false,
    });
  } else {
    res.status(200).json({
      success: true,
      post: post,
    });
  }
};
module.exports = {
  createProjectAPI: createProjectAPI,
};
