const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./usersTours.json');
let nRounds = 13;
let hashedUsers = [];
let newUsers=[];
let start = new Date(); 
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);
let salt = bcrypt.genSaltSync(nRounds); 
for(var ele of users){
let passHash = bcrypt.hashSync(ele.password, salt);
newUsers={
    "firstName": ele.firstName,
    "lastName": ele.lastName,
    "email": ele.email,
    "password":passHash,
    "role": ele.role
};
hashedUsers.push(newUsers);
}
//console.log(hashedUsers);
let elapsed = new Date - start; 
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("userTourHash.json", JSON.stringify(hashedUsers, null, 2));
