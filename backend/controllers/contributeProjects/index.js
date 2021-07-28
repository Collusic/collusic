const router = require("express");
const { isLoggedIn, isNotLoggedIn } = require("../../routes/middlewares");
const { Post, User } = require("../../models");
//field값

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
// isLoggedIn 미들웨어 어디다 넣지..?

module.exports = {
  createContributeProjectAPI: createContributeProjectAPI,
};