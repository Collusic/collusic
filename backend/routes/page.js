const express = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  uploadWithOriginalFilename,
} = require("./middlewares");
const { Post, User } = require("../models");
const router = express.Router();

const mypageController = require("../controllers/mypage");
const ProjectController = require("../controllers/requestProjects");
const contributeProjectController = require("../controllers/contributeProjects")
router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get("/mypage", isLoggedIn, mypageController.readMyPageAPI);
router.post(
  "/requestProject",
  isLoggedIn,
  uploadWithOriginalFilename.single("data"),
  ProjectController.createProjectAPI,
);
router.post(
  "/contributeproject",
  isLoggedIn,
  uploadWithOriginalFilename.single("data"),
  contributeProjectController.createContributeProjectAPI,
);


module.exports = router;
