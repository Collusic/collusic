// const express = require("express");
// const router = express.Router();

// const readMyPageAPI = (req, res) => {
//   const User = await User.findOne({
//     attributes: ["nickname", "imagePath", "introduce", "email"],
//     where: {
//       nickname: req.user.nickname,
//       imagePath: req.user.imagePath,
//       introduce: req.user.introduce,
//       email: req.user.email,
//     },
//   });

//   res.status(200).json({
//     nickname: `${nickname}`,
//     imagePath: `${imagePath}`,
//     introduce: `${introduce}`,
//     email: `${email}`,
//   });
// };

// const updateUserInfoAPI = (req, res) => {};
// const deleteUserInfoAPI = (req, res) => {};

// module.exports = {
//   readMyPageAPI,
//   updateUserInfoAPI,
//   deleteUserInfoAPI,
// };
