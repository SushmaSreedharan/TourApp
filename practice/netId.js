var express = require('express');

var app = express();

port = 443; 

host = '127.0.0.7'; 
app.get('/netID',function(req,res){
  res.send(`Name:Sushma,NetID:rg4984`);
});

app.listen(port,host,function(){
  console.log(`NetID app listening on ${host}:${port}`);
});