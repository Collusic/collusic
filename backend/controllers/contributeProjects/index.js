const router = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload_commit,
} = require("../../routes/middlewares");
const { Post, User,Comment } = require("../../models");
//field값

const createContriProjectAPI = async (req, res) => {
  let id = req.params.id;
  const commentpost = await Comment.create({
    c_description: req.body.description,
    c_audioFile: req.file.filename,
    c_lyrics_text: req.body.lyrics_text,
    pid: id,
    selected_status:false
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