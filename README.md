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
var users = require('./tour.json');
app.get('/tours',function(req,res){
  db.insert(users, function(err, newDocs) {
    if(err) {
      console.log("Something went wrong when writing");
      console.log(err);
    } else {
      console.log("Added " + newDocs.length + " tours");
    }
  });  
  res.send(users);
});
```

### (b)

```javascript
app.use(express.static('public'));
let urlencodedParser = express.urlencoded({extended: true});
app.post('/tours/add',urlencodedParser,function(req,res){
  var newTour = req.body;
  res.send(users);
  console.log(newTour);
  users.push(newTour);
  console.log(users);

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



