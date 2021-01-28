const express = require("express");
const app = express();
var mysql = require("./lib/mysql");
var bodyParser = require("body-parser");
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var flash = require('connect-flash');

app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views_file");
app.set("view engine", "jade");
const port = 3000;


app.use(session({
  secret: 'asfefsg@@$!124312sfas',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Password123!',
    database:'collusic'
  })
}));
// 미들웨어의 실행순서 중요. falsh는 session 다음 
app.use(flash());

var passport = require('./lib/passport')(app);

var mysqlRouter = require("./routes/mysql");
var authRouter = require("./routes/auth")(passport);
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("Follow"));
app.use(express.static("image"));
app.use(express.static("Unfollow"));
app.use(express.static("project"));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
