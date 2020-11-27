var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
      }

      response.writeHead(200);
      var src = '그림1.png';
      var src2 = '그림2.png';
      var template = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Collusic</title>
          <style>
            div#first {
              width: 400px;
              height: 200px;
              float: left;
              position: relative;
              left: 600px;
              top: 200px;
            }
            div#second {
              width: 400px;
              height: 200px;
              float: left;
              position: relative;
              left: 200px;
              top: 330px;
            }
            div#user1 {
              width: 100px;
              height: 100px;
              border-radius: 70%;
              overflow: hidden;
              float: left;
              position: relative;
              right: 350px;
              top: 170px;
            }
            div#user2 {
              width: 100px;
              height: 100px;
              border-radius: 70%;
              overflow: hidden;
              float: left;
              position: relative;
              right: 450px;
              top: 300px;
            }
            input#block1 {
              font-size: 30px;
              width: 120px;
              height: 50px;
              float: left;
              position: relative;
              top: 200px;
              background-color: turquoise;
            }
            input#block2 {
              font-size: 30px;
              width: 120px;
              height: 50px;
              float: left;
              position: relative;
              top: 330px;
              right: 120px;
              background-color: turquoise;
            }
            div#text1 {
              font-size: 15px;
              width: 170px;
              height: 50px;
              float: left;
              position: relative;
              top: 270px;
              right: 520px;
            }
            div#text2 {
              font-size: 15px;
              width: 170px;
              height: 50px;
              float: left;
              position: relative;
              top: 340px;
              right: 520px;
            }
          </style>
        </head>
        <body>
          <h1>Collusic</h1>
          <div id="first">
            <audio controls loop>
              <source src="학선_우리만남이.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div id="second">
            <audio controls loop>
              <source src="학선_우리만남이.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div id="user1">
            <img src="${src}" alt="My Image" />
          </div>
          <div id="user2">
            <img src="${src2}" alt="My Image" />
          </div>
              
              <script>
                var count1 = 0;
                var count2 = 0;
      
                function OnClick1(){
                  if(document.querySelector('#block1').value === '협업하기'){
                     document.querySelector('#block1').value = '참여완료';} 
                  count1 += 1;
                  var text1 = document.getElementById("text1");
                  text1.innerHTML = count1 + "명이 기여하였습니다.";              
                   }
                
                
      
                function OnClick2(){
                  if(document.querySelector('#block2').value === '협업하기'){
                     document.querySelector('#block2').value = '참여완료';}
                  count2 += 1;
                  var text2 = document.getElementById("text2");
                  text2.innerHTML = count2 + "명이 기여하였습니다.";
                }
            </script>
      
            <input id="block1" type="botton" value="협업하기" onclick="OnClick1()">
            <input id="block2" type="botton" value="협업하기" onclick="OnClick2()">
            <div id="text1">0명이 기여하였습니다.</div>
            <div id="text2">0명이 기여하였습니다.</div>
        </body>
      </html>
    `;
    response.end(template);
});
app.listen(3000);
