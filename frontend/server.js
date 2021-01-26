const express = require("express");
const app = express();
var mysql = require("./mysql");
var bodyParser = require("body-parser");

var mysqlRouter = require("./routes/mysql");
var authRouter = require("./routes/auth");
var chooseRouter = require("./routes/choose");
var portfolioRouter = require("./routes/portfolio");
var collaboratingRouter = require("./routes/collaborating");
var waitingCollaborationRouter = require("./routes/waitingCollaboration");

mysql.db.connect();

app.use("/", mysqlRouter);
app.use("/", authRouter);
app.use("/", chooseRouter);
app.use("/", portfolioRouter);
app.use("/", collaboratingRouter);
app.use("/", waitingCollaborationRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views_file");
app.set("view engine", "jade");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("Follow"));
app.use(express.static("image"));
app.use(express.static("Unfollow"));
app.use(express.static("project"));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
