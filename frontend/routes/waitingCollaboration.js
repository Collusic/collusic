const express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var css = require('../css');
const fs = require("fs");

router.get("/waitingCollaboration", function (req, res) {

    var navCss = css.navBar;

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
  module.exports = router;