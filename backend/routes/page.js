const express = require("express");
const {
  isLoggedIn,
  isNotLoggedIn,
  uploadWithOriginalFilename,
} = require("./middlewares");
const { Post, User } = require("../models");
const router = express.Router();

const mypageController = require("../controllers/mypage");
const requestProjectController = require("../controllers/requestProjects");
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
  requestProjectController.createProjectAPI
);
// router.put("/mypage/:id", mypageController.createContributeProjectAPI);
// router.delete("/mypage/:id", mypageController.deleteUserInfoAPI);

// router.get("/req-projects", requestProjectController.readAllRequestProjectAPI);

// router.get("/user/refresh", userController);
// router.get("/mypage", isLoggedIn, async (req, res, next) => {
//   try {
//     const myinfo = await User.findOne({
//       attributes: ["email", "introduce"],
//       where: {
//         email: req.user.email,
//       },
//     });
//     res.status(200).json({
//       email: myinfo,
//     });
//   } catch (err) {
//     res.status(400).json({
//       error: err,
//     });
//   }
// });

// router.get("/join", isNotLoggedIn, (req, res) => {
//   res.render("join", { title: "회원가입 - collusic" });
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const posts = await Post.findAll({
//       include: {
//         model: User,
//         attributes: ["id", "nick"],
//       },
//       order: [["createdAt", "DESC"]],
//     });
//     res.render("main", {
//       title: "collusic",
//       twits: posts,
//     });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

module.exports = router;
