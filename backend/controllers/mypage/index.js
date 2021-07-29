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
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  readMyPageAPI: readMyPageAPI,
};
