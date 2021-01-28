const express = require("express");
var router = express.Router();
var mysql = require("../lib/mysql");
var bodyParser = require("body-parser");
var auth = require("../lib/auth");

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

var _storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "commit_audio/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //파일이름
  },
}); //객체 표현 des,filename둘다 함수로 해야한다
var upload_commit = multer({ storage: _storage2 }); //업로드파일 어디에 지정할지-->uploads에 위치

router.get("/create", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
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
                  INSERT INTO project (u_name, project_key, audioPath, title, description) 
                    VALUES(?, ?, ?, ?, ?)`,
        [req.user.username, num, req.file.filename, title, description],
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
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  mysql.db.query(
    `SELECT * FROM project WHERE audioPath=?`,
    [req.query.audioPath],
    function (error2, project) {
      if (error2) {
        throw error2;
      }

      var updatepage = `
      <form action="update_process" method="post" enctype="multipart/form-data">
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

<<<<<<< HEAD
router.post("/delete_process", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
    console.log(req.body);
  var audioPath = req.body.audioPath;
  var username = req.body.username;
  
=======
router.post("/deleteProject_process", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  console.log("req body_P", req.body);
  var audioPath = req.body.audioPath;
  var username = req.body.username;

  mysql.db.query(
    `DELETE FROM project WHERE audioPath = ? and u_name = ?`,
    [audioPath, username],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

router.post("/deleteCommit_process", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  console.log("req.body_C", req.body);
  var u_name = req.body.u_name;
  var p_key = req.body.p_key;
  var username = req.body.username;
  var c_audioPath = req.body.c_audioPath;
  //select * from commit as c join project as p on c.u_id=p.u_id where c.c_id= ?;
  mysql.db.query(
    `DELETE FROM commit where u_name = ? and c_name=? and p_key=?`,
    [u_name, username, p_key],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

router.post("/collabo_process", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  //var audioPath = req.body.audioPath;

  var u_name = req.body.u_name;
  var p_key = req.body.project_key;
  mysql.db.query(
    `INSERT INTO commit (u_name, c_name, p_key) values(?, ?, ?) `,
    [u_name, req.user.username, p_key],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});
//기여하려할때 create/updqte/delete과정
router.get("/create_contri", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  var u_name = req.query.u_name;
  var p_key = req.query.p_key;
  //check
  var id = req.query.p_key;
  var c_audioPath = req.query.c_audioPath;
  var commitform = `
          <form action="create_contriprocess" method="post" enctype="multipart/form-data">
              <input type="hidden" name="u_id" value="${u_name}" />
              <input type="hidden" name="p_key" value="${p_key}" />
              <input type="hidden" name="id" value="${id}" />
              <input type="hidden" name="c_audioPath" value="${c_audioPath}" />
              <p>
                  <textarea name="description" placeholder="description"></textarea>
              </p>
              <input type="file" name="usercommitfile" />
              <input type="submit" />
          </form>`;
          //check
  console.log(u_name, p_key, id, c_audioPath);
  res.send(commitform);
});

router.post(
  "/create_contriprocess",
  upload_commit.single("usercommitfile"),
  function (req, res) {
    if(!auth.isOwner(req, res)){
      res.redirect('/');
      return false;
  }
    //var title = req.body.title;
    var description = req.body.description;
    var u_name = req.body.u_name;
    var p_key = req.body.p_key;
    //var c_audioPath = req.body.c_audioPath;

    //var path = havetoreset; //! multer 후 작업 audioPath
    //var id = "egoing";
    mysql.db.query(
      `SELECT * FROM commit WHERE u_id = ? and p_key=? and c_audioPath = ?`,
      [u_name, p_key, "NULL"],
      function (error, result) {
        if (error) {
          throw error;
        }
        //UPDATE project SET audioPath=?, title=?, description=? WHERE audioPath=?
        mysql.db.query(
          `UPDATE commit SET c_audioPath=?, description=?`,
          [req.file.filename, description],
          function (error, result2) {
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
  }
);

router.get("/update_contri", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  mysql.db.query(
    `SELECT * FROM commit WHERE c_audioPath=?`,
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

router.post(
  "/update_contriprocess",
  upload_commit.single("usercommitfile"),
  function (req, res) {
    if(!auth.isOwner(req, res)){
      res.redirect('/');
      return false;
  }
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
  }
);

router.post("/deletecontri_process", function (req, res) {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  console.log("req body_P", req.body);
  var audioPath = req.body.audioPath;
  var id = req.body.id;

>>>>>>> feature/Issue-10
  mysql.db.query(
    `DELETE FROM project WHERE audioPath = ? and u_name = ?`,
    [audioPath, username],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.redirect("/collaborating");
    }
  );
});

module.exports = router;
