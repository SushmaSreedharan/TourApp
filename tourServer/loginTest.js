// const rp = require('request-promise-native');

// let options = {
//     uri: 'http://127.0.0.1:3000/login',
//     method: 'POST', 
//     json: true,
//     body:{ firstName: "Luna",
//     lastName: "Munoz",
//     email: "sylvan2059@live.com",
//     password: "1wQX_lYt",
//     role: "customer"}
// };
// rp(options)
//     .then(function (res) {
//         debugger;let tourNumber=0;
//         // for(var val in res)
//         // {tourNumber++;
//         // console.log(`Tour ${tourNumber} name ${res[val].name}, date: ${res[val].date}` );}
//         console.log("Good email, good password");
//     }).catch(rej=>{
//         console.log(rej);
//     });

const rp = require('request-promise-native');
let cookiejar = rp.jar();

let loginGood = {
uri: 'http://127.0.0.1:3000/login',
json: true,
method: "POST",
body: {"email": "sylvan2059@live.com",
"password": "1wQX_lYt"},
jar: true
};
let loginBadEmail = {
    uri: 'http://127.0.0.1:3000/login',
json: true,
method: "POST",
body: {"email": "sylvan205@live.com",
"password": "1wQX_lYt"}
};
let loginBadPass = {
uri: 'http://127.0.0.1:3000/login',
json: true,
method: "POST",
body: {"email": "sylvan2059@live.com",
"password": "2wQX_lYt"}
};
async function someTests() {
let res;
try {
res = await rp(loginGood);
console.log(`Good login test result: ${JSON.stringify(res)}\n`);
console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
console.log(cookiejar);

} catch (error) {
console.log(`Good login error: ${error}\n`);
}
try {
    res = await rp(loginBadEmail);
    console.log(`Bad email login test result: ${JSON.stringify(res)}\n`);
    console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
    } catch (error) {
    console.log(`Bad email login error: ${error}`);
    }
    try {
    res = await rp(loginBadPass);
    console.log(`Bad password login test result: ${JSON.stringify(res)}\n`);
    } catch (error) {
    console.log(`Bad password login error: ${error}\n`);
    }
    }
someTests();