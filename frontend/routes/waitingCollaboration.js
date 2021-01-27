const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var css = require("../css");
const fs = require("fs");

router.get("/waitingCollaboration", function (req, res) {
  var navCss = css.navBar;

  mysql.db.query(`select * from project `, function (error, result) {
    if (error) {
      throw error;
    }

    var list = "<tr>";
    var i = 0;
    while (i < result.length) {
      list =
        list +
        `<th><p>${result[i].title}<audio src="${result[i].audioPath}" controls></audio><form action="/collabo_process" method="post">
        <input type="hidden" name="u_id" value="${result[i].u_id}">
        <input type="hidden" name="project_key" value="${result[i].project_key}">
        <input type="submit" value="협업하기">
      </form></p></th>`;
      list = list + `</tr>`;
      i++;
    }

    var page5 = `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>Wating Collaboration</title>
      </head>
      
      <body>
      
          <style>
              body{
                  background-image: linear-gradient(.25turn, white, 10%, blue);
                  background-image: url("sky-clouds-summer.jpg");
                  background-repeat: no-repeat;
                  background-size: cover;
              }
  
              ${navCss(3)}
  
              .audio {
                  border-right: none;
                  border-left: none;
                  border-top: none;
                  border-bottom: none;
              }
      
              .left-box{
                position: relative;
                top: 100px;
                  float: left;
                  width: 50%;
              }
      
              .right-box{
                position: relative;
                top: 100px;
                  float: right;
                  width: 50%;
              }
          </style>
          <nav>
              <ul class="nav-container">
                  <li class="nav-item"><a href="portfolio">Portfolio</a></li>
                  <li class="nav-item"><a href="collaborating">Collaborating</a></li>
                  <li class="nav-item"><a href="waitingCollaboration">Waiting Collaboration</a></li>
              </ul>
          </nav>
          <div class="left-box">
              <table class="audio">
                  <tr>
                      <th>waiting collaboration</th>
                  </tr>
                  ${list}
              </table>
          </div>
    
      </body>
      
      </html>
      `;

    res.send(page5);
  });
});
module.exports = router;
