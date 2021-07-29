const router = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload_commit,
} = require("../../routes/middlewares");
const { Post, User, Comment } = require("../../models");

const createContriProjectAPI = async (req, res) => {
  let id = req.params.id;
  const commentpost = await Comment.create({
    c_description: req.body.description,
    c_audioFile: req.file.filename,
    c_lyrics_text: req.body.lyrics_text,
    pid: id,
    selected_status: false,
  });
  if (!commentpost) {
    res.status(400).json({
      success: false,
    });
  } else {
    res.status(200).json({
      success: true,
      commentpost: commentpost,
    });
  }
};

module.exports = {
  createContriProjectAPI: createContriProjectAPI,
};
