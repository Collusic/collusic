var http = require("http");
var fs = require("fs");
var url = require("url");

function templateList(filelist, menutitle, description) {
  var list = `
              <li class="outer-menu-item">
              <span class="menu-title">`;
  list = list + `${menutitle}</span>`;
  list = list + `<ul class="inner-menu>`;
  var i = 0;
  while (i < filelist.length) {
    list =
      list +
      `<li class="inner-menu-item"><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + "</ul></li>";
  list = list + `<p>${description}</p>`;
  return list;
}

function templateHTML(list, body) {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>HTML5 Basic Page</title>
    </head>
    <body>
        <div id="page-wrapper">
    
            <header id="main-header"></header>
                <hgroup>
                    <h1 class="master-title">Collusic</h1>
                    <h2 class="master-description">profile</h2>
                    <img style="
                    border: 3px solid gold;
                    border-radius: 80px;
                    -moz-border-radius: 80px;
                    -khtml-border-radius: 80px;
                    -webkit-border-radius: 80px;
                    "
                    src="http://placehold.it/430x280" />
                    <br>
                    <p>Contact: seagirl@gmail.com</p>
                    <p>인디/작곡/기타</p>
                    <br>
                </hgroup>
            <nav id="main-navigation"></nav>
                <div xlass="pull-left">
                  <ul class="outer-menu">
                  ${list}
                  ${body}
  `;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
    fs.readdir("./ActiveLog", function (error, filelist) {
      fs.readFile(
        `ActiveLog/${queryData.id}`,
        "utf8",
        function (err, description) {
          var list = templateList(filelist, "활동/로그", description);
          var template = templateHTML(
            list,
            `
          </ul>
          </div>
          
          <div class="pull-right">
            <div class="search-bar">
               <form>
                   <input type="text" class="input-search" />
                   <input type="submit" class="input-search-submit" value="Search" />
               </form>
            </div>
          </div>
      </nav>

      <div id="content">

            <section id="main-section">
                <article>
                    <div class="article-header">
                        <h1 class="article-title">협업중</h1>
                        <p class="article date">시작2020.07.14</p>
                    </div>
                    <div class="article-body">
                        <img src="http://placehold.it/430x280" alt="430x280">
                        <br>
                        <br>
                        <p>-낙엽을 보는 고양이를 보고영감받은 곡입니다</p>
                        
                        <p>-2절의 후렴구 멜로디가 필요합니다;)</p>
                        <button onclick="window.location.href='https:file:https://www.notion.so/dc91f82c6f8346f8a4a8dd80608054b3'">참여하기</button>
                    </div>
                </article>
                <article>
                    <div class="article-header">
                        <h1 class="article-title">협업완료</h1>
                        <p class="article-date">완료2019.12.25</p>
                        <img src="http://placehold.it/430x280" alt="430x280">
                    </div>
                    <div class="article-body">
                        <img src="" alt="">
                        <p>- 곡제목: 치즈가 쿠키했대,,</p>
                        
                        <p>- 참여자: @seagirl@yeosu</p>
                        <button onclick="window.location.href='https:file:https://www.notion.so/dc91f82c6f8346f8a4a8dd80608054b3'">곡듣기</button>
                    </div>
                </article>
            </section>

             <aside id="main-aside">
                 <div class="aside-list">
                     <h3>seagirl's -studio</h3>
                     <ul>
                         <li><a href="#">data</a></li>
                         <li><a href="#">data</a></li>
                         <li><a href="#">data</a></li>
                         <li><a href="#">data</a></li>
                         <li><a href="#">data</a></li>
                     </ul>
                 </div>
                 <div class="aside-list">
                     <h3>최근 작업</h3>
                     <ul>
                          <li><a href="#">data</a></li>
                          <li><a href="#">data</a></li>
                          <li><a href="#">data</a></li>
                          <li><a href="#">data</a></li>
                     </ul>
                 </div>
             </aside>
      </div>
      <footer id="main-footer">
          <a href="#">Created By Collusic</a>
      </footer>
</div>
</body>
</html>`
          );
          response.writeHead(200);
          response.end(template);
        }
      );
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
