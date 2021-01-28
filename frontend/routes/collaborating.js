const express = require("express");
var router = express.Router();
var mysql = require("../lib/mysql");
var css = require("../css");
var auth = require("../lib/auth");

router.get("/collaborating", (req, res) => {
  if(!auth.isOwner(req, res)){
    res.redirect('/');
    return false;
}
  var navCss = css.navBar;

  var id = "egoing";

  mysql.db.query(
    `select * from project as p join user as u on p.u_id=u.userid where u.userid=?;`,
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }

      var active = "";

      var i = 0;

      console.log(result);
      while (i < result.length) {
        active += `<p class="audioPath"><a href="/collaborating?audioPath=${result[i].audioPath}">${result[i].audioPath}</a><button onclick="project()">보기</button></p>`;
        i++;
      }

      var j = 0;
      var contri = ``;
      while (j < 5) {
        contri += `<audio src=${j + 1} controls>`;
        j++;
      }

      var audioPath = req.query.audioPath; // update, delete, create 버튼 가져오면서 생성한 변수 --다애가 넣음! 106번째 줄-112번째 줄

      var html = `
      <!DOCTYPE html>
      <html lang="ko">
      
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Collaborating</title>
    
        <style>
          body {
            background-image: url("sky-clouds-summer.jpg");
            background-size: cover;
          }

          ${navCss(2)}
    
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
              display: block;
              height: 100%;
              float: left;
              width: 28%;
              border-right-width: 3px;
              border-right-style: dashed;
          }
    
          .right-box {
              position: relative;
              top: 20px;
              display: block;
              height: 100%;
              float: right;
              width: 68%;
          }
  
          .audioPath{
            float: left;
          }
  
          #contri{
            position: relative;
            top: 100px;
          }
        </style>
      </head>
      <body>
        <nav>
            <ul class="nav-container">
                <li class="nav-item"><a href="portfolio">Portfolio</a></li>
                <li class="nav-item"><a href="collaborating">Collaborating</a></li>
                <li class="nav-item"><a href="waitingCollaboration">Waiting Collaboration</a></li>
            </ul>
        </nav>
        <section>
          <div class="left-box">
                <h3>진행 중인 프로젝트</h3>
                  ${active}
                
                <a href="/create">create</a> <a href="/update?audioPath=${
                  req.query.audioPath
                }">update</a>
  <form action="/delete_process" method="post">
    <input type="hidden" name="audioPath" value="${audioPath}">
    <input type="hidden" name="id" value="${id}">
    <input type="submit" value="delete">
  </form>
              
          </div>
          <div class="right-box">
            <h3>현재 선택된 프로젝트 </h3>
            <div id="right-text">
            </div>
          </div>
      </body>
      <script>
      function project(){
        var content = document.getElementById("right-text");
        content.innerHTML = "<audio src='${req.query.audioPath}' controls>";
        content.innerHTML += "<div>기여한 사람들의 멜로디</div>";
        content.innerHTML += "${contri}";
      }
      </script>
      </html>
      `;

      res.send(html);
    }
  );
});
module.exports = router;
