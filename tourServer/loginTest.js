const rp = require('request-promise-native');

let options = {
    uri: 'http://127.0.0.1:3000/login',
    method: 'POST', 
    json: true,
    body:{ firstName: "Luna",
    lastName: "Munoz",
    email: "sylvan2059@live.com",
    password: "1wQX_lYt",
    role: "customer"}
};
rp(options)
    .then(function (res) {
        debugger;let tourNumber=0;
        // for(var val in res)
        // {tourNumber++;
        // console.log(`Tour ${tourNumber} name ${res[val].name}, date: ${res[val].date}` );}
        console.log("Good email, good password");
    }).catch(rej=>{
        console.log(rej);
    });