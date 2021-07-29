const router = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload_commit,
} = require("../../routes/middlewares");
const { Post, User,Comment } = require("../../models");
//field값

const createContriProjectAPI = async (req, res) => {
  const post = await Comment.create({
    c_description: req.body.description,
    c_audioFile: req.file.filename,
    c_lyrics_text: req.body.lyrics_text,
    selected_status:false
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

/*
const createContributeProjectAPI = async (req, res, next) => {
  try { // 기여작 생성 쿼리
    const createcontributeproject = await Comment.create({
      c_description: req.body.description,
      c_audioFile: req.file.filename,
      c_lyrics_text: req.body.lyrics_text,
    });
    res.status(200).json({
      createcontributeproject,
    });
  } catch (err) {
    console.log(err);
    console.log(req.file);
    res.status(400).json({ message: err });
  }
};
*/

module.exports = {
  createContriProjectAPI: createContriProjectAPI,
};