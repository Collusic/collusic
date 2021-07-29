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
    audioFile: req.file.location,
    music_field: Boolean(req.body.music_field),
    lyrics_field: Boolean(req.body.lyrics_field),
    instrument_field: Boolean(req.body.instrument_field),
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

const mainInfoAPI = async (req, res) => {
  try {
    const maininfo = await Post.findAll({
      attributes: [
        "uid",
        "title",
        "field_free",
        "music_field",
        "lyrics_field",
        "instrument_field",
        "genre",
        "mood",
        "audioFile",
      ],
    });
    res.status(200).json({
      maininfo,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
module.exports = {
  createProjectAPI: createProjectAPI,
  mainInfoAPI: mainInfoAPI,
};
