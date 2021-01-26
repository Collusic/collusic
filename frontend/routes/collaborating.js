const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var css = require('../css');
const { query } = require("express");
const { db } = require("../mysql");

router.get("/collaborating", (req, res)  => {
    var navCss = css.navBar;

    var id = 'egoing';
  
    mysql.db.query(`select * from project as p join user as u on p.u_id=u.id where u.id=?;`, [id], (error, result)=> {
      if(error){
          throw error;
      }
  
      var active = ''
        
      var i = 0;
      
        while(i < result.length){
          active += `<p class="audioPath"><a href="/collaborating?id=${result[i].audioPath}">${result[i].audioPath}</a><button onclick="project()">보기</button></p>`
          i++;
        }
        // create_process 페이지에서 db.query(project id= egoing (err, result)=>{
        //   var num = result.length + 1;
        // })
        // db.query(`insert 뭐시기 뭐시기 뭐시기 p_key values(뭐시기 뭐시기 뭐시기 ?)`, [num]);

        var j = 0;
        var contri=``;
        while(j < 5){
          contri += `<audio src=${j+1} controls>`;
          j++;
        }
  
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
                
                <a href="/create"><button>create</button></a>
              
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
        content.innerHTML = "<audio src='${req.query.id}' controls>";
        content.innerHTML += "<div>기여한 사람들의 멜로디</div>";
        content.innerHTML += "${contri}";
      }
      </script>
      </html>
      `;
  
      res.send(html);
    });
  });
  module.exports = router;