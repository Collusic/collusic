const router = require("express");
const { isLoggedIn, isNotLoggedIn } = require("../../routes/middlewares");
const { Post, User } = require("../../models");
//field값

const createProjectAPI = async (req, res, next) => {
  try {
    const createproject = await Post.create({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      mood: req.body.mood,
      audioFile: req.file.filename,
      music_field: req.body.music_field,
      lyrics_field: req.body.lyrics_field,
      instrument_field: req.body.instrument_field,
    });
    res.status(200).json({
      createproject,
    });
  } catch (err) {
    console.log(err);
    console.log(req.file);
    res.status(400).json({ message: err });
  }
};
// isLoggedIn 미들웨어 어디다 넣지..?

module.exports = {
  createProjectAPI: createProjectAPI,
};
