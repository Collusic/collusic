var express = require("express");
var router = express.Router();
var mysql = require("../mysql");
var css = require('../css');

router.get("/portfolio", (req, res) => {
    
    var navCss = css.navBar;
    var id = 'egoing';

    mysql.db.query(`select * from portfolio as p join user as u on p.u_id=u.id where u.id=?;`,[id] , (error1, result1) => {
        if(error1){
            throw error;
        }
        mysql.db.query(`select * from project as p join user as u on p.u_id=u.id where u.id=?;`, [id], (error2, result2)=> {
        if(error2){
            throw error;
        }
        var photoPath = result1[0].photoPath;
        var introduction = result1[0].introduction;
        var phone = result1[0].phone;
        var audioPath = result2[0].audioPath;

        var contribute = 15;
        var selection = 10;

        var active = '<table>'
        

        var i = 0;
        if(result2.legnth % 2 + 1) // 활동프로젝트 수가 짝수면
        {
          while(i*2 < result2.length){
            active += `<tr><th><audio src="${result2[i*2].audioPath}" width="100px" controls></th><th><audio src="${result2[i*2+1].audioPath}" width="100px" controls></th></tr>`;
            i++;
          }
          active += '</table>'
        }

        else if(result2.length % 2) // 활동프로젝트 수가 홀수면
        {
          while(i*2 < result2.length - 1){
            active += `<tr><th><audio src="${result2[i*2].audioPath}" width="100px" controls></th><th><audio src="${result2[i*2+1].audioPath}" width="100px" controls></th></tr>`;
            i++;
          }
          active += `<tr><th><audio src="${result2[i*2].audioPath}" width="100px" controls></th></tr></table>`
        }
        

        var html = `
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Portfolio</title>
        
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        
            <style>
                body {
                  background-image: url("sky-clouds-summer.jpg");
                  background-size: cover;
                }
        
                ${navCss(1)}
        
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
                    display: inline;
                    height: 100%;
                    float: left;
                    width: 28%;
                    border-right-style: dashed;
                    border-right-width: 3px;
                }
        
                .right-box {
                    position: relative;
                    top: 20px;
                    display: inline;
                    height: 100%;
                    float: right;
                    width: 68%;
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

                .most{
                  position: relative;
                  top: 30px;
                  width: 100%;
                  height: 100px;
                }

                .most audio{
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                }

                .status p{
                  position: relative;
                  top: 30px;
                  margin-left: 28%;
                  display: inline;
                }

                .active-log{
                  position: relative;
                  top: 100px;
                  width: 100%;
                  text-align: center;
                }

                .active{
                  position: relative;
                  left: 20%;
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
                    <div class="most">
                      <audio src="${audioPath}" width="300px" controls>
                    </div>
                    <div class="status">
                      <p id="contribute">기여 수 ${contribute}</p><p id="selection">채택 수 ${selection}</p>
                    </div>
                    <h3 class="active-log">
                      활동기록
                    </h3>
                    <div class="active">
                    ${active}
                    </div>
                </div>
            </section>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
        </body>
        </html>
          `;
        res.send(html);
    });
  })
});
module.exports = router;