// var tours = require('../ReactTour/tour.json');
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + './usersDB', autoload: true});
var hashTours = require('./tourServer/userTourHash');
var tours = require('./tourServer/tour.json');
const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
var cookieParser = require("cookie-parser"); // For cookies

var app = express();
port = 3000; 
host = '127.0.0.1'; 

const cookieName = "rg4984"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
  debugger;
  console.log(`session object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.user) {
      req.session.user = {role: "guest"};
  };
  next();
};

app.use(setUpSessionMiddleware);
app.use(cookieParser());
app.get('/tours',function(req,res){
  console.log("Cookies: ", req.cookies);
  db.insert(tours, function(err, newDocs) {
    if(err) {
      console.log("Something went wrong when writing");
      console.log(err);
    } else {
      console.log("Added " + newDocs.length + "tours");
    }
  });  
  res.send(tours);
});
app.use(setUpSessionMiddleware);
app.use(cookieParser());
app.get('/login',function(req,res){
  console.log("Cookies: ", req.cookies);
  db.insert(tours, function(err, newDocs) {
    if(err) {
      console.log("Something went wrong when writing");
      console.log(err);
    } else {
      console.log("Added " + newDocs.length + "tours");
    }
  });  
  res.send(tours);
});

app.use(express.static('public'));
let urlencodedParser = express.urlencoded({extended: true});
// Use this middleware to restrict paths to only logged in users
// const checkCustomerMiddleware = function (req, res, next) {
//     if (req.session.user.role === "guest") {
//         res.status(401).json({error: "Not permitted"});
//         } else {
//         console.log(`Session info: ${JSON.stringify(req.session)} \n`);
//         next();
//     }
// };
// User this middlewave to restrict paths only to admins
const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};
// Only available to admin, returns updated tour list.
app.post('/addTour', checkAdminMiddleware, express.json(), function (req, res) {
  var newTour = req.body;
  res.send(tours);
  console.log(newTour);
  tours.push(newTour);
});

app.post('/addTour',urlencodedParser,function(req,res){
  // debugger;
  // console.log('add clicked');
  var newTour = req.body;
  res.send(tours);
  console.log(newTour);
  tours.push(newTour);
  console.log(tours);
  db.insert([newTour], function(err, newDocs) {
    if(err) {
      console.log("Something went wrong when writing");
      console.log(err);
    } else {
      console.log("Added " + newDocs.length + "tours");
    }
  });  
  //  res.send(users);
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
    // Upgrade in priveledge, should generate new session id
    // Save old session information if any, create a new session
    console.log(req.session.cookie);
    let oldInfo = req.session.user;
    console.log(oldInfo);
    req.session.regenerate(function (err) {
        if (err) {console.log(err);}
        let newUserInfo = Object.assign(oldInfo, auser);
        delete newUserInfo.passHash;
        req.session.user = newUserInfo;
        res.json(newUserInfo);
        console.log(newUserInfo);
    });
} else {
      res.status(401).json({error: true, message: "Good email, incorrect password"});
  }
});
app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.json({message: "Goodbye"});
	})
});

app.listen(port,host,function(){
  console.log(`Tour Server listening on ${host}:${port}`);
});

module.exports = app;