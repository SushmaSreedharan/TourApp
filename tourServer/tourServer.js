var tours = require('../ReactTour/tour.json');
var hashTours = require('./userTourHash');
const express = require('express');
const bcrypt = require('bcryptjs');
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
app.post('/login',express.json(),function(req,res){
 console.log(JSON.stringify(req.body));
  let email = req.body.email;
  let password = req.body.password;
  // Find user
  let auser = hashTours.find(function (user) {
      return user.email === email
  });
  if (!auser) {// Not found
      res.status(401).json({error: true, message: "User/Password error"});
      return;
  }
  let verified = bcrypt.compareSync(password, auser.password);
  if (verified) {
    console.log("Good Login Test result");
  } else {
      res.status(401).json({error: true, message: "Good email, incorrect password"});
  }
});
app.listen(port,host,function(){
  console.log(`Tour Server listening on ${host}:${port}`);
});
