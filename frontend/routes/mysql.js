const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
var id = "egoing";
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
// var project_set = "";
// var i =0;
// while(i <result.length)
// var project_set = result1[i].project_key
// res.render("upload");

router.post("/create_process", upload.single("userfile"), function (req, res) {
  var title = req.body.title;
  var description = req.body.description;

  //var path = havetoreset; //! multer 후 작업 audioPath
  //var id = "egoing";
  mysql.db.query(
    `SELECT * FROM project WHERE u_id = ?`,
    [id],
    function (error, project) {
      if (error) {
        throw error;
      }
      var num = project.length + 1;
      mysql.db.query(
        `
                  INSERT INTO project (u_id, project_key, audioPath, title, description) 
                    VALUES(?, ?, ?, ?, ?)`,
        [id, num, req.file.filename, title, description],
        function (error, result) {
          if (error) {
            throw error;
          }
          res.redirect("/collaborating");
        }
      );
    }
  );

  //res.send("Uploaded : " + req.file.filename);
  //삭제함.
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

router.post("/deleteProject_process", function (req, res) {
  console.log("req body_P", req.body);
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

router.post("/deleteCommit_process", function (req, res) {
  console.log("req.body_C", req.body);
  var u_id = req.body.u_id;
  var p_key = req.body.p_key;
  var id = req.body.id;
  var c_audioPath = req.body.c_audioPath;
  //select * from commit as c join project as p on c.u_id=p.u_id where c.c_id= ?;
  mysql.db.query(
    `DELETE FROM commit where u_id = ? and c_id=? and p_key=?`,
    [u_id, id, p_key],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

router.post("/collabo_process", function (req, res) {
  //var audioPath = req.body.audioPath;
  var id = "egoing";

  var u_id = req.body.u_id;
  var p_key = req.body.project_key;
  mysql.db.query(
    `INSERT INTO commit (u_id, c_id, p_key) values(?, ?, ?) `,
    [u_id, id, p_key],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

module.exports = router;
