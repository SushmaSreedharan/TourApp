var tours = require('../ReactTour/tour.json');
console.log(tours);
var express = require('express');

var app = express();

port = 3000; 

host = '127.0.0.1'; 
app.get('/tours',function(req,res){
  res.send(JSON.stringify(tours), null, "\t");
});

app.listen(port,host,function(){
  console.log(`Tour Server listening on ${host}:${port}`);
});
