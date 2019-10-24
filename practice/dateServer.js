var express = require('express');

var app = express();
var date = new Date();
port = 5555; 

host = '127.0.0.2'; 
app.get('/date',function(req,res){
  res.send(`Date and time:${date}`);
});

app.listen(port,host,function(){
  console.log(`Date and time app listening on ${host}:${port}`);
});