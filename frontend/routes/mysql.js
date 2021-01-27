const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

var multer = require("multer");
var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "project/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //파일이름
  },
}); //객체 표현 des,filename둘다 함수로 해야한다
var upload = multer({ storage: _storage }); //업로드파일 어디에 지정할지-->uploads에 위치

router.get("/create", function (req, res) {
  res.render("upload");
});

router.post("/create_process", upload.single("userfile"), function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  //var path = havetoreset; //! multer 후 작업 audioPath
  //var id = "egoing";
  mysql.db.query(
    `
            INSERT INTO project (u_id, audioPath, title, description) 
              VALUES(?, ?, ?, ?)`,
    ["egoing", req.file.filename, title, description],
    function (error, result) {
      if (error) {
        throw error;
      }
    }
  );
  //res.send("Uploaded : " + req.file.filename);
  //삭제함.
  res.redirect('/collaborating');
});

router.get("/update", function (req, res) {
  mysql.db.query(
    `SELECT * FROM project WHERE audioPath=?`,
    [req.query.audioPath],
    function (error2, project) {
      if (error2) {
        throw error2;
      }

      var updatepage = `
      <form action="update_process" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="${project[0].title}" />
        <input type="hidden" name="audioPath" value="${req.query.audioPath}" />
        <p>
            <input type="text" name="title" placeholder="title" value="${project[0].title}" />
        </p>
        <p>
            <textarea name="description" placeholder="description">${project[0].description}</textarea>
        </p>
        <input type="file" name="userfile" />
        <input type="submit" />
      </form>`;

      console.log(req.query.audioPath);
      res.send(updatepage);
    }
  );
});

router.post("/update_process", upload.single("userfile"), function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var audioPath = req.body.audioPath;
  console.log(audioPath);

  mysql.db.query(
    `UPDATE project SET audioPath=?, title=?, description=? WHERE audioPath=? `,
    [req.file.filename, title, description, audioPath],
    function (error, result) {
      res.redirect("/collaborating");
    }
  );
});

router.post("/delete_process", function (req, res) {
    console.log(req.body);
  var audioPath = req.body.audioPath;
  var id = req.body.id;
  
  mysql.db.query(
    `DELETE FROM project WHERE audioPath = ? and u_id = ?`,
    [audioPath, id],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

module.exports = router;