const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const fs = require("fs");
var mysql = require("./mysql");

var authRouter = require('./routes/auth');
var chooseRouter = require('./routes/choose');
var portfolioRouter = require('./routes/portfolio');
var collaboratingRouter = require('./routes/collaborating');
var waitingCollaborationRouter = require('./routes/waitingCollaboration');


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



app.get("/create1", (req, res) => {
  var title = req.query.id;
  var create = `
  <a href="/create">create</a> <a href="/update?id=${req.query.id}">update</a>
  <form action="/delete_process" method="post">
    <input type="hidden" name="id" value="${title}">
    <input type="submit" value="delete">
  </form>
    `;
  res.send(create);
});

app.get("/create", function (req, res) {
  mysql.db.query(`SELECT * FROM project;`, function (error, projects) {
    if (error) {
      throw error;
    }
    var template = `
  <form action="/create_process" method="post">
    <p><input type="text" name="title" placeholder="title"></p>
    <p>
      <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
    `;
    res.writeHead(200);
    res.send(template);
  });
});
app.post("/create_process", function (req, res) {
  //   var title = req.body.title;
  //   var description = req.body.description;
  mysql.db.query(
    `
            INSERT INTO project (key, u_key, path, title, description) 
              VALUES(1, 2, dfdfdf, ?, ?)`,
    [post.title, post.description],
    function (error, result) {
      res.writeHead(302, { Location: `/?id=${result.insertId}` });
      res.end();
    }
  );
});

app.get("/update", function (req, res) {
  fs.readFile(`Active/${req.query.id}`, "utf-8", function (err, description) {
    var jaemook = req.query.id;
    var template = `
      <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${jaemook}">
        <p><input type="text" name="title" placeholder="title" value="${jaemook}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        <a href="/create">create</a> <a href="/update?id=${jaemook}">update</a>`;
    res.send(template);
  });
});
app.post("/update_process", function (req, res) {
  var id = req.body.id;
  var title = req.body.title;
  var description = req.body.description;

  fs.rename(`Active/${id}`, `Active/${title}`, function (err) {
    fs.writeFile(`Active/${title}`, description, "utf-8", function (err) {
      res.writeHead(302, { Location: `/?id=${title}` });
      res.end();
    });
  });
});

app.post("/delete_process", function (req, res) {
  var id = req.body.id;
  fs.unlink(`Active/${id}`, function (err) {
    res.writeHead(302, { Location: `/` });
    res.end();
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
