const multer = require("multer");

var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "project/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.upload = multer({ storage: _storage });
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
