const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var css = require("../css");

router.get("/collaborating", (req, res) => {
  var navCss = css.navBar;

  var id = "egoing";

  mysql.db.query(
    `select * from project as p join user as u on p.u_id=u.id where u.id=?;`,
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }

      var active = "";

      var i = 0;

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
      //select * from project as p join commit as c on p.project_key = c.p_key and c.u_id=p.u_id and c.p_key =p.project_key where  c_id = "egoing";
      mysql.db.query(
        `select * from commit as c join project as p on c.u_id=p.u_id and c.p_key=p.project_key where c.c_id= ?;`,
        [id],
        (error, result2) => {
          if (error) {
            throw error;
          }

          var active2 = "";

          var s = 0;

          while (s < result2.length) {
            active2 += `<p class="audioPath"><a href="/collaborating?u_id=${result2[s].u_id}&p_key=${result2[s].p_key}&audioPath=${result2[s].audioPath}&c_audioPath=${result2[s].c_audioPath}">${result2[s].audioPath}</a><button onclick="project2()">보기</button></p>`;
            s++;
          }

          var k = 0;
          var contri2 = ``;
          while (k < 5) {
            contri2 += `<audio src=${k + 1} controls>`;
            k++;
          }

          var audioPath = req.query.audioPath; // update, delete, create 버튼 가져오면서 생성한 변수 --다애가 넣음! 106번째 줄-112번째 줄
          var u_id = req.query.u_id;
          var p_key = req.query.p_key;
          var c_audioPath = req.query.c_audioPath;

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
                <h3>협업요청 중인 프로젝트</h3>
                  ${active}
                
                <div><a href="/create">create</a> <a href="/update?audioPath=${
                  req.query.audioPath
                }">update</a></div>
  <form action="/deleteProject_process" method="post">
    <input type="hidden" name="audioPath" value="${audioPath}">
    <input type="hidden" name="id" value="${id}">
    <input type="submit" value="delete">
  </form>
                <p><h3>기여중인 프로젝트</h3></p>
                  ${active2}
                  <form action="/deleteCommit_process" method="post">
    <input type="hidden" name="u_id" value="${u_id}">
    <input type="hidden" name="p_key" value="${p_key}">
    <input type="hidden" name="id" value="${id}">
    <input type="hidden" name="c_audioPath" value="${c_audioPath}">
    <input type="submit" value="delete">
  </form>
  
          </div>
          <div class="right-box">
            <h3>현재 선택된 프로젝트 </h3>
            <div><a href="/create_contri?u_id=${u_id}&p_key=${p_key}&c_audioPath=${c_audioPath}">create</a> <a href="/update_contri?audioPath=${
            req.query.audioPath
          }">update</a></div>
<form action="/deletecontri_process" method="post">
<input type="hidden" name="audioPath" value="${audioPath}">
<input type="hidden" name="id" value="${id}">
<input type="submit" value="delete">
</form>
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
      <script>
      function project2(){
        var content = document.getElementById("right-text");
        content.innerHTML = "<audio src='${req.query.audioPath}' controls>";
        content.innerHTML += "<div>기여한 사람들의 멜로디</div>";
        content.innerHTML += "${contri2}";
      }
      </script>
      </html>
      `;

          res.send(html);
        }
      );
    }
  );
});
module.exports = router;
