const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
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
          </fieldset>
    </body>
    </html>
    `;
    res.send(page1);
});
module.exports = router;