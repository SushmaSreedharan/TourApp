const rp = require('request-promise-native');
let cookieJar = rp.jar();

let addTour = {
uri: 'http://127.0.0.1:3000/addTour',
json: true,
method: "POST",
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
    body: {"email": "sided1830@outlook.com",
    "password": "C}m8\"L,F"},
    jar:cookieJar
    };

let loginCust = {
        uri: 'http://127.0.0.1:3000/login',
        json: true,
        method: "POST",
        body: {"email": "sylvan2059@live.com",
        "password": "1wQX_lYt"},
        jar:cookieJar
    };

let loginGuest = {
    uri: 'http://127.0.0.1:3000/login',
    json: true,
    method: "POST",
    body: {"email": "sylvin2059@live.com",
    "password": "1wQX_Yt"},
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
        console.log("Test 1: Admin login: add tour");
        console.log("Called tour, Cookies " + cookieJar.getCookieString(tourInfo.uri));
        }
        catch (error) {
            console.log(`Good login error: ${error}\n`);
            }
        
        try {
            await rp(tourInfo);
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
    try {
        console.log("Test 2 Customer add tour");
        console.log("Called tour, Cookies " + cookieJar.getCookieString(tourInfo.uri));
        }
        catch (error) {
            console.log(`Good login error: ${error}\n`);
            }
        try {
        await rp(tourInfo);
        res = await rp(loginCust);
        console.log(`Customer login test result: ${JSON.stringify(res)}\n`);
        console.log("After customer login, Cookies " + cookieJar.getCookieString(loginCust.uri));

        } catch (error) {
            console.log("customer add tour error",);
            res.status(401).json({error: true, message: "Not permitted"});
          
            
        }
     try{
        
            rp(addTour).then(function (res) {
           
                    console.log(`Customer visit, no of tours ${(res.body.length)-1}`);
                    console.log(`Admin add tour test, no of tours ${res.body.length}`);
                });
            
            // rp(addTour)
            //     .then(function (res) {
            //         console.log(`Admin add tour test, no of tours ${res.body.length}`);
            //     });
            // res = await rp(addTour);
            
            }
            catch (error) {
                console.log("customer add tour error",);
                res.status(401).json({error: "Not permitted"});
             
                }
                try {
                    console.log("Test 2 Customer add tour");
                    console.log("Called tour, Cookies " + cookieJar.getCookieString(tourInfo.uri));
                    }
                    catch (error) {
                        console.log(`Good login error: ${error}\n`);
                        }
                    try {
                    await rp(tourInfo);
                    res = await rp(loginGuest);
                    console.log(`Customer login test result: ${JSON.stringify(res)}\n`);
                    console.log("After customer login, Cookies " + cookieJar.getCookieString(loginGuest.uri));
            
                    } catch (error) {
                       
                        res.status(401).json({error: true, message: "Not permitted"});
                      
                        
                    }
}
someTests();
