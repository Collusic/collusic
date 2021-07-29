// const express = require("express");
// const router = express.Router();

// const userInformationAPI = (req, res) => {
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
// };

const createContributeProjectAPI = (req, res) => {};
const readRequestProjectsAPI = (req, res) => {};
const readContributeProjectsAPI = (req, res) => {
  if (!id) {
    res.status(400).json({ error: "you don't send requestProject Id!" });
  }

  res.status(200).json({ contributeProject: projects });
};
module.exports = {
  userInformationAPI,
  createContributeProjectAPI,
  readRequestProjectsAPI,
  readContributeProjectsAPI,
};
