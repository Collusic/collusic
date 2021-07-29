const express = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  upload,
  upload_commit,
} = require("./middlewares");
//const { Post, User } = require("../models");
const router = express.Router();
const mypageController = require("../controllers/mypage");
const requestProjectController = require("../controllers/requestProjects");
const contributeProjectController = require("../controllers/contributeProjects");
const { request } = require("express");
router.get("/mypage", isLoggedIn, mypageController.readMyPageAPI);
router.post(
  "/requestProjects",
  upload.single("data"),
  isLoggedIn,
  requestProjectController.createProjectAPI
);
router.get("/requestProjects", requestProjectController.mainInfoAPI);
router.get(
  "/requestProjects/:id/comments",
  isLoggedIn,
  requestProjectController.commentsAPI
);
router.post(
  "/requestProjects/:id/comments",
  upload_commit.single("data"),
  contributeProjectController.createContriProjectAPI
);
module.exports = router;
