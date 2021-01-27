const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {

  var fmsg = request.flash();
  var feedback = '';
  if (fmsg.error) {
    feedback = fmsg.error[0];
  }

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
                      <p>id : <input name='id' type='text'> </p>
                      <p>pw : <input name='pw' type='password'> </p>
                      <input type='submit' value='login'>
                      <input type='reset' value='google'> 
                      <input type='reset' value='Facebook'>
                  </form>
                  <a href="/legister"><button>회원가입</button></a>
          </fieldset>
          <div style="color:red;">${feedback}</div>
    </body>
    </html>
    `;
    res.send(page1);
});

// 회원가입 UI
router.get('/register', function (req, res) {
  
  var html = `
      
      <form action="/auth/register_process" method="post">
        <p><input type="text" name="email" placeholder="email" value="egoing7777@gmail.com"></p>
        <p><input type="password" name="pwd" placeholder="password" value="111111"></p>
        <p><input type="password" name="pwd2" placeholder="password" value="111111"></p>
        <p><input type="text" name="displayName" placeholder="display name" value="egoing"></p>
        <p>
          <input type="submit" value="register">
        </p>
      </form>
    `;
  response.send(html);
});

// 회원가입 정보 lowdb에 저장
router.post('/register_process', function (req, res, next) {
  hasher(
    { password: req.body.password },
    function (err, pass, salt, hash) {
      var user = {
        authId: 'local:' + req.body.username,
        username: req.body.username,
        password: hash,
        salt: salt
      };
      db.query(
        'INSERT INTO users SET ?',
        user, 
        function (err, result) {
          if (error) throw error;
          res.redirect('/');
      });
    }
  );
  var post = request.body;
  var email = post.email;
  var pwd = post.pwd;
  var pwd2 = post.pwd2;
  var displayName = post.displayName;
  if (pwd !== pwd2) {
    req.flash('error', 'Password must same!');
    res.redirect('/');
  } else {
    bcrypt.hash(pwd, 10, function (err, hash) {
      // db.json에 저장할 사용자 회원가입 내용
      var user = {
        id: shortid.generate(),
        email: email,
        password: hash,
        displayName: displayName
      };
      db.get('users').push(user).write();
      req.login(user, function (err) {
        console.log('redirect');
        return res.redirect('/choose');
      })
    });
  }
});

router.get('/logout', function (req, res) {
  req.logout();
  req.session.save(function () {
    res.redirect('/');
  });
});
module.exports = router;