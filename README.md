**Student Name**:  Sushma Cheneerkuppum Sreedharan

**NetID**: rg4984

# Homework #9 Solution

## Question 1 

### (a)

```javascript
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/usersDB');
const users = require('./userTourHash.json');

async function initialize() { // so I can await!
    try {
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize(); // don't forget to run the async function
```

### (b)

```javascript
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/usersDB');
const users = require('./tour.json');

async function initialize() { // so I can await!
    try {
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize(); // don't forget to run the async function
```

## Question 2

### (a)
```javascript
const db = new DataStore({filename: __dirname + './usersDB', autoload: true});
var tours = require('./tour.json');
app.get('/tours',function(req,res){
  db.insert(tours, function(err, newDocs) {
    if(err) {
      console.log("Something went wrong when writing");
      console.log(err);
    } else {
      console.log("Added " + newDocs.length + " tours");
    }
  });  
  res.send(tours);
});
```

### (b)

```javascript
app.use(express.static('public'));
let urlencodedParser = express.urlencoded({extended: true});
app.post('/tours/add',urlencodedParser,function(req,res){
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
  
});
```

## Question 3

### (a)
```javascript
const cookieName = "rg4984"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
  console.log(`session object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.user) {
      req.session.user = {role: "guest"};
  };
  next();
};

app.use(setUpSessionMiddleware);
```

### (b)
![Developer-tool Screenshot](images/cookie.png)

### (c)

```javascript


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


```
### (d)

```javascript
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
```
### (e)

![Developer-tool Screenshot](images/logintest.png)