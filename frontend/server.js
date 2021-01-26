const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const fs = require("fs");
var mysql = require("./mysql");
var authRouter = require('./routes/auth');
var chooseRouter = require('./routes/choose');
var portfolioRouter = require("./routes/portfolio");
var collaboratingRouter = require("./routes/collaborating");
var waitingCollaborationRouter = require("./routes/waitingCollaboration");
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
const { response } = require("express");


mysql.db.connect();

app.use('/', authRouter);
app.use('/', chooseRouter);
app.use('/', portfolioRouter);
app.use('/', collaboratingRouter);
app.use('/', waitingCollaborationRouter);

const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(express.static("Follow"));
app.use(express.static("image"));
app.use(express.static("Unfollow"));
app.use(express.static("project"));

app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views_file");
app.set("view engine", "jade");


app.get("/create", function (req, res) {
  res.render("upload");
});

app.post("/create_process", upload.single("userfile"), function (req, res) {
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
  res.writeHead(302, { Location: `/?id=${req.file.filename}` });
  res.end();
});

app.get("/update", function (req, res) {
  mysql.db.query(
    `SELECT * FROM project WHERE audioPath=?`,
    [req.query.id],
    function (error2, project) {
      if (error2) {
        throw error2;
      }

      var updatepage = `
      <form action="update_process" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="${project[0].title}" />
        <input type="hidden" name="audioPath" value="${req.query.id}" />
        <p>
            <input type="text" name="title" placeholder="title" value="${project[0].title}" />
        </p>
        <p>
            <textarea name="description" placeholder="description">${project[0].description}</textarea>
        </p>
        <input type="file" name="userfile" />
        <input type="submit" />
      </form>`;

      console.log(req.query.id);
      res.send(updatepage);
    }
  );
});

app.post("/update_process", upload.single("userfile"), function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var audioPath = req.body.audioPath;
  console.log(audioPath);

  mysql.db.query(
    `UPDATE project SET audioPath=?, title=?, description=? WHERE audioPath=? `,
    [audioPath, title, description, audioPath],
    function (error, result) {
      res.writeHead(302, { Location: `/?id=${audioPath}` });
      res.end();
    }
  );

  // fs.rename(`Active/${id}`, `Active/${title}`, function (err) {
  //   fs.writeFile(`Active/${title}`, description, "utf-8", function (err) {
  //     res.writeHead(302, { Location: `/?id=${title}` });
  //     res.end();
  //   });
  // });
});

app.post("/delete_process", function (req, res) {
  var id = req.body.id;
  console.log(id);
  mysql.db.query(
    `DELETE FROM project WHERE audioPath = ?`,
    [id],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.writeHead(302, { Location: `/` });
      res.end();
    }
  );
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
