const express = require("express");
const app = express();
var mysql = require("./mysql");
var bodyParser = require("body-parser");
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);


app.use(session({
  secret: 'asfefsg@@$!124312sfas',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host:'localhost',
    user:'root',
    password:'Password123!',
    database:'collusic'
  })
}));
app.use(passport.initialize()); // passport 사용 하도록 세팅
app.use(passport.session()); // passport 사용 시 session을 활용
app.use(flash());

var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();

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
