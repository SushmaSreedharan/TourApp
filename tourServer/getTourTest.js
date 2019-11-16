// const rp = require('request-promise-native');

// let options = {
//     uri: 'http://127.0.0.1:3000/tours',
//     method: 'GET', 
//     json: true,
    
// };
// rp(options)
//     .then(function (res) {
//         debugger;let tourNumber=0; let i=0;
//         JSON.stringify(res);
//         for(var val in res)
//         {   
//         tourNumber++;  
//         console.log(`Tour ${tourNumber} name ${res[val].name}, date: ${res[val].date}` );}
//     });


const rp = require('request-promise-native');
let cookieJar = rp.jar();

let addTour = {
uri: 'http://127.0.0.1:3000/addTour',
json: true,
method: "GET",
resolveWithFullResponse:true,
jar:cookieJar
};

let logout = {
    uri: 'http://127.0.0.1:3000/logout',
    json: true,
    method: "GET",
    jar:cookieJar
    };

let loginAdmin = {
    uri: 'http://127.0.0.1:3000/login',
    json: true,
    method: "POST",
    body: {"email": "sylvan2059@live.com",
    "password": "1wQX_lYt"},
    
    jar:cookieJar
    };

let tourInfo = {
    uri: 'http://127.0.0.1:3000/tours',
    json: true,
    method: "GET",
    resolveWithFullResponse: true,
    jar:cookieJar
    };

async function someTests() {
    try {
        console.log("Admin login: add tour");
        await rp(tourInfo);
        console.log("Called tour, Cookies " + cookieJar.getCookieString(tourInfo.uri));
        }
        catch (error) {
            console.log(`Good login error: ${error}\n`);
            }
        
        try {
        res = await rp(loginAdmin);
        console.log(`Admin login test result: ${JSON.stringify(res)}\n`);
        console.log("After admin login, Cookies " + cookieJar.getCookieString(loginAdmin.uri));
        } catch (error) {
        console.log(`Good login error: ${error}\n`);
        }
try {
rp(tourInfo).then(function (res) {

     
        console.log(`Admin visit, no of tours ${(res.body.length)-1}`);
    });
rp(addTour)
    .then(function (res) {
        console.log(`Admin add tour test, no of tours ${res.body.length}`);
    });
}
catch (error) {
    console.log(`Good login error: ${error}\n`);
    }

try {
   await rp(logout);
    console.log("After logout, Cookies " + cookieJar.getCookieString(logout.uri));
    } catch (error) {
    console.log(`Logout error: ${error}\n`);
    }
}
someTests();
