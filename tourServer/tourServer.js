var tours = require('../ReactTour/tour.json');
const express = require('express');
var app = express();

port = 3000; 
host = '127.0.0.1'; 

app.get('/tours',function(req,res){
  res.send(JSON.stringify(tours), null, "\t");
  // res.json(tours);
});
app.use(express.static('public'));
let urlencodedParser = express.urlencoded({extended: true});
app.post('/tours/add',urlencodedParser,function(req,res){
  // debugger;
  // console.log('add clicked');
  var newTour = req.body;
  res.send(tours);
  console.log(newTour);
  tours.push(newTour);


});
app.listen(port,host,function(){
  console.log(`Tour Server listening on ${host}:${port}`);
});
