const express = require("express");
const mysql = require("../lib/mysql");
const { db } = require("../lib/mysql");
const auth = require("../lib/auth")
var router = express.Router();

module.exports = function(passport){
router.get("/", (req, res) => {
  var fmsg = req.flash();
  var feedback = '';
  if (fmsg.error) {
    feedback = fmsg.error[0];
  }
  console.log('/user', req.user);

  var page1 = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Collusic</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="css/styles.css">
      <link href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet">
      <style>
          h1{
            position: relative;  
            font-size : 100px;
              left: 70px;
              top: 150px;
              color:bisque;
          }
    
          fieldset{
            padding-top: 0.85em;
            margin-left: 90px;
            margin-top: 160px;
            color:aliceblue;
            
            
          }
          img{
            float: right;
            margin-right: 60px;
            margin-top: 100px;
          }
          body {
            background-image: linear-gradient(.25turn, white, 10%, blue);
            background-image: url("sky-clouds-summer.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }
       </style>
    </head>
    <body>
    <h2>${auth.statusUI(req, res)}</h2>
      <div style="height: auto; width: 100%;">
       <h1>COLLUSIC</h1>
        <img src="drum-set.png" alt="drum" width="150" height="150">
        <img src="guitar.png" alt="guitar" width="150" height="150">
        <img src="piano.png" alt="piano" width="150" height="150">
        <img src="singer.png" alt="singer" width="150" height="150">
      </head>
          <fieldset style="width:250px;">
              <legend>login</legend>
                  <form method='post' action='/login_process'>
                      <p>id : <input name='email' type='text'> </p>
                      <p>pw : <input name='pwd' type='password'> </p>
                      <input type='submit' value='login'>
                      <input type='reset' value='google'> 
                      <input type='reset' value='Facebook'>
                  </form>
                  <a href="/register"><button>회원가입</button></a>
          </fieldset>
          <div>${feedback}</div>
    </body>
    </html>
    `;
  res.send(page1);
});

router.post('/login_process',
    passport.authenticate('local', {
      successRedirect: '/choose',
      failureRedirect: '/',
      failureFlash: true
    }));
// 회원가입 UI
router.get('/register', function (req, res) {
  var fmsg = req.flash();
  var feedback = '';
  if (fmsg.error) {
    feedback = fmsg.error[0];
  }
  var html = `
      <form action="/register_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p><input type="password" name="pwd2" placeholder="password"></p>
        <p><input type="text" name="userid" placeholder="userid"></p>
        <p><input type="submit" value="register"></p>
      </form>
      <div>${feedback}</div>
    `;
  res.send(html);
});

router.post('/register_process', (req, res)=>{
  var post = req.body;
  var email = post.email;
  var pwd = post.pwd;
  var pwd2 = post.pwd2;
  var userid = post.userid;
  if(pwd !== pwd2){
    req.flash('error', 'Password must same!');
    res.redirect('/register');
  }else{
  mysql.db.query(`insert into user (id, password, userid) values (?, ?, ?)`,
  [email, pwd, userid], (err, result)=>{
    if(err) throw err;
  })
  mysql.db.query(`select * from user where id = ?`,
  [email], (err, user)=>{
    if(err) throw err;
    req.login(user[0], (err)=>{
      console.log(user[0], 'redirect');
      return res.redirect('/choose');
    })
  })
}
})

router.get('/logout', function (req, res) {

  req.logout();
  req.session.save(function () {
    res.redirect('/');
  });
});
return router;
}