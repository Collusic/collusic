const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../../routes/middlewares");
const { Post, User } = require("../../models");
//field값
const readMyPageAPI = async (req, res, next) => {
  try {
    const myinfo = await User.findOne({
      attributes: ["email", "introduce"],
      where: {
        email: req.user.email,
      },
    });
    res.status(200).json({
      email: myinfo,
    });
    // const postinfo = await Post.findAll({
    //   attributes: ["title", "field"],
    // });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
// isLoggedIn 미들웨어 어디다 넣지..?

module.exports = {
  readMyPageAPI: readMyPageAPI,
};
