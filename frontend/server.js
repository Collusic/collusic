const express = require("express");
const app = express();
const fs = require("fs");
var bodyParser = require("body-parser");
const mysql = require("mysql");

const port = 3000;

app.use(express.static("Follow"));
app.use(express.static("image"));
app.use(express.static("Unfollow"));

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Password123!',
    database:'collusic'
});
db.connect();

app.get("/", (req, res) => {
  var page1 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>로그인</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet">
  </head>
  <body>
    <div style="height: auto; width: 100%;">
     <h1>COLLUSIC</h1>
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
      <img src="drum-set.png" alt="drum" width="150" height="150">
      <img src="guitar.png" alt="guitar" width="150" height="150">
      <img src="piano.png" alt="piano" width="150" height="150">
      <img src="singer.png" alt="singer" width="150" height="150">
      <html>
        <title>login</title>
        <style>
        </style>
    </head>
    <body>
        <fieldset style="width:250px;">
            <legend>login</legend>
                <form method='post' action='login_ck.php'>
                    <p>id : <input name='id' type='text'> </p>
                    <p>pw : <input name='pw' type='password'> </p>
                    <input type='submit' value='login'> 
                    <input type='reset' value='google'>
                    <input type='reset' value='Facebook'>
                    
                </form>
        </fieldset>
        
      
  
    </body>
      </html>
      
  </body>
  </html>
  `;
  res.send(page1);
});

app.get("/page2", (req, res) => {
  var html = `
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
        <title>부트스트랩 101 템플릿</title>
    
        <!-- 부트스트랩 -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
        <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <style>
            body {
                background-image: url("sky-clouds-summer.jpg");
                background-size: cover;
            }
    
            .row {
                position: relative;
                display: flex;
            }
    
            .row .col-md-4 {
                font-size: 50px;
                font-weight: bold;
                background-color: whitesmoke;
                padding-bottom: 50%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
    
    
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                -webkit-transition: .3s;
                -moz-transition: .3s;
                -ms-transition: .3s;
                -o-transition: .3s;
                transition: .3s;
            }
    
            .row .col-md-4:hover {
                font-size: 50px;
                font-weight: bold;
                background-color: mediumseagreen;
                padding-bottom: 45%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
                color: white;
    
                -webkit-transform: scale(1.05);
                -moz-transform: scale(1.05);
                -ms-transform: scale(1.05);
                -o-transform: scale(1.05);
                transform: scale(1.05);
            }
    
            .left {
                background-color: beige;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .center {
                background-color: aqua;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .right {
                background-color: burlywood;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .left-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .center-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .right-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 3px 3px 5px grey;
            }
    
            img {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation {
                font-size: large;
            }
    
            .left:hover {
                color: white;
            }
    
            .img2 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation2 {
                font-size: large;
            }
    
            .img3 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation3 {
                font-size: large;
            }
    
        </style>
    </head>
    
    <body>
    
        <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
        <script src="js/bootstrap.min.js"></script>
        <div class="row">
            <div class="col-md-4 left">
                <div class="left-text">
                    Portfolio
                </div>
                <div class="img">
                    <img src="그림1.png">
                </div>
                <div class="imformation">
                    <p>
                        이름 : 박재현
                    </p>
                    <p>
                        전화번호 : 010-4814-2697
                    </p>
                    <p>
                        대표곡 : Music is my Life
                    </p>
                </div>
            </div>
            <div class="col-md-4 center">
                <div class="center-text">
                    Collaboration
                </div>
                <div class="img2">
                    <img src="band.png">
                </div>
                <div class="imformation2">
                    <p>
                        .....
                    </p>
                    
                </div>
            </div>
            <div class="col-md-4 right">
                <div class="right-text">
                    Seeking collaboration
                </div>
                <div class="img3">
                    <img src="united.png">
                </div>
                <div class="imformation3">
                    <p>
                        .....
                    </p>
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
  res.send(html);
});

app.get("/page3", (req, res) => {
    
    var id = 'egoing';

    db.query(`select * from portfolio as p join user as u on p.u_id=u.id where u.id=?;`,[id] , (error, result) => {
        if(error){
            throw error;
        }
        var photoPath = result[0].photoPath;
        var introduction = result[0].introduction;
        var phone = result[0].phone;

    db,query(`select * from project as p join user as u on p.u_id=u.id where u.id=?;`, [id], (error, result)=> {
        if(error){
            throw error;
        }
        var audioPath = result[0].audioPath;

        var html = `
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>부트스트랩 101 템플릿</title>
        
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        
            <style>
                body {
                    margin: 0;
                }
        
                .nav-container {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    background-color: darkslategray;
                    list-style-type: none;
                    position: fixed;
                    top: 0;
                    z-index: 1;
                }
        
                .nav-item {
                    padding: 15px;
                    cursor: pointer;
                }
        
                .nav-item a {
                    text-align: center;
                    text-decoration: none;
                    color: white;
                }
        
                .nav-item:nth-child(1) {
                    background-color: lightseagreen;
                }
        
                .nav-item:hover {
                    background-color: grey;
                }
        
                section{
                    position: absolute;
                    display: block;
                    top: 60px;
                    width: 100%;
                    height: 100%;
                }
        
                .left-box {
                    position: relative;
                    top: 20px;
                    background: red;
                    display: block;
                    height: 100%;
                    float: left;
                    width: 30%;
                }
        
                .right-box {
                    position: relative;
                    top: 20px;
                    background: rgb(86, 86, 228);
                    display: block;
                    height: 100%;
                    float: right;
                    width: 70%;
                }
        
                div.profile > img{
                    margin-top: 50px;
                    width: 300px;
                    display: block;
                    margin-left:auto;
                    margin-right: auto;
                }
      
                .btn-follow{
                    position: relative;
                    top: 10px;
                    right: 30px;
                    display: inline-block;
                    margin-left: 70%;
                    width: 70px;
                }
      
                h3{
                  text-align: center;
                }
      
                .intro{
                    text-align: center;
                    margin: 30px;
                }
      
                .phone{
                    margin-top: 30px;
                    text-align: center;
                }
            </style>
        </head>
        
        <body>
            <nav>
                <ul class="nav-container">
                    <li class="nav-item"><a href="">Portfolio</a></li>
                    <li class="nav-item"><a href="">In Collaboration</a></li>
                    <li class="nav-item"><a href="">Seeking Collaboration</a></li>
                </ul>
            </nav>
            <section>
                <div class="left-box">
                    <div class="profile">
                        <img src="${photoPath}">
                    </div>
                    <div>
                        <button type="button" class="btn-follow">팔로우</button>
                    </div>
                    <div class="phone">
                      phone : ${phone}
                    </div>
                    <h3>자신을 소개합니다!</h3>
                    <div class="intro">
                      ${introduction}
                    </div>
                </div>
                <div class="right-box">
                  <h3>대표작품</h3>
                    <div>
                      <audio src="${audioPath}">
                    </div>
                </div>
            </section>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
        </body>
        </html>
          `;
        res.send(html);
    })
});

app.get("/page4", (req, res) => {
  var html = `
        
    `;
  res.send(html);
})
});

app.get("/page5", function (req, res) {
  var files = fs.readdirSync("Follow"); //Follow파일 -->사용자가 팔로우한 사람들의 곡이 들어있는 파일.
  var list = "<tr>";
  var i = 0;
  while (i < files.length) {
    list =
      list +
      `<th><p>${files[i]}<audio src="./Follow/${files[i]}" controls></audio></p></th>`;
    list = list + `</tr>`;
    i++;
  }

  var files2 = fs.readdirSync("Unfollow"); //Unfollow파일 -->사용자가 팔로우하지 않은 사람들의 곡이 들어있는 파일.
  var list2 = "<tr>";
  var s = 0;
  while (s < files2.length) {
    list2 =
      list2 +
      `<th><p>${files2[s]}<audio src="./Unfollow/${files2[s]}" controls></audio></p></th>`;
    list2 = list2 + `</tr>`;
    s++;
  }

  var page5 = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    
    <body>
    
        <style>
            body{
                background-image: linear-gradient(.25turn, white, 10%, blue);
                background-image: url("sky-clouds-summer.jpg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            .audio {
                border-right: none;
                border-left: none;
                border-top: none;
                border-bottom: none;
            }
    
            .left-box{
                float: left;
                width: 50%;
            }
    
            .left-box{
                float: right;
                width: 50%;
            }
        </style>
        <div class="left-box">
            <table class="audio">
                <tr>
                    <th>팔로우한 프로젝트</th>
                </tr>
                ${list}
            </table>
        </div>
    
        <div class="right-box">
            <table class="audio">
                <tr>
                    <th>팔로우 하지 않은 프로젝트</th>
                </tr>
                ${list2}
            </table>
    
        </div>
    </body>
    
    </html>
    `;
  res.send(page5);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
