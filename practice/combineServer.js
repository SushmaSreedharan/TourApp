var express = require('express');

var app = express();
var date = new Date();
port = 34942; 

host = '127.0.1.1'; 
app.get('/date',function(req,res){
  res.send(`Date and time:${date}`);
});
app.get('/netID',function(req,res){
    res.send(`Name:Sushma,NetID:rg4984`);
  });

app.listen(port,host,function(){
    console.log(`Combined app listening on ${host}:${port}`);
  });