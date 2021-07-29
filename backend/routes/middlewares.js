const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const storage = multerS3({
  s3: s3,
  bucket: "collusic",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `requests/${Date.now()}_${file.originalname}`);
  },
});

// var _storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "project/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
exports.upload = multer({ storage: storage });
//commment
var _storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "comment_audio/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
exports.upload_commit = multer({ storage: _storage2 });

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};
