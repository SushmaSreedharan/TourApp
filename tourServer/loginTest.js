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
let cookieJar = rp.jar();

let loginGood = {
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

let loginBadEmail = {
    uri: 'http://127.0.0.1:3000/login',
json: true,
method: "POST",
body: {"email": "sylvan205@live.com",
"password": "1wQX_lYt"},
resolveWithFullResponse: true,
jar:cookieJar
};


let loginBadPass = {
uri: 'http://127.0.0.1:3000/login',
json: true,
method: "POST",
body: {"email": "sylvan2059@live.com",
"password": "2wQX_lYt"}
};
let logout = {
    uri: 'http://127.0.0.1:3000/logout',
    json: true,
    method: "GET",
    jar:cookieJar
    };



async function someTests() {
let res;

try {
console.log("Login test 1: Good login");
await rp(tourInfo);
console.log("Called tour, Cookies " + cookieJar.getCookieString(tourInfo.uri));
}
catch (error) {
    console.log(`Good login error: ${error}\n`);
    }

try {
res = await rp(loginGood);
console.log(`Good login test result: ${JSON.stringify(res)}\n`);
console.log("After good login, Cookies " + cookieJar.getCookieString(loginGood.uri));
} catch (error) {
console.log(`Good login error: ${error}\n`);
}
try {
    res = await rp(logout);
    console.log("After logout, Cookies " + cookieJar.getCookieString(logout.uri));
    } catch (error) {
    console.log(`Good login error: ${error}\n`);
    }
    try {
        console.log("Login test 2: Bad email");
        await rp(tourInfo);
        console.log("After login test 2, Cookies " + cookieJar.getCookieString(tourInfo.uri));
        }
        catch (error) {
            console.log(`Bad login error: ${error}\n`);
            }
        try {
        res = await rp(loginBadEmail);
        console.log(`Test result: ${JSON.stringify(res)}\n`);
        } catch (error) {
        console.log(`Bad login email error: ${error}\n`);
        }
        try {
            console.log("Login test 3: Bad password");
            await rp(tourInfo);
            console.log("After login test 3, Cookies " + cookieJar.getCookieString(tourInfo.uri));
            }
            catch (error) {
                console.log(`Bad password error : ${error}\n`);
                }
            try {
            res = await rp(loginBadPass);
            console.log(`Test result: ${JSON.stringify(res)}\n`);
            } catch (error) {
            console.log(`Bad login password error: ${error}\n`);
            }
// try {
//     res = await rp(loginBadPass);
//     console.log(`Bad password login test result: ${JSON.stringify(res)}\n`);
//     } catch (error) {
//     console.log(`Bad password login error: ${error}\n`);
//     }
    }
someTests();
