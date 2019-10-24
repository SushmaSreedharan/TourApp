const rp = require('request-promise-native');

let options = {
    uri: 'http://127.0.0.1:3000/tours',
    method: 'GET', 
    json: true,
    
};
rp(options)
    .then(function (res) {
        debugger;let tourNumber=0;
        JSON.stringify(res);

        for(var val in res)
        {tourNumber++;
        console.log(`Tour ${tourNumber} name ${res[val].name}, date: ${res[val].date}` );}

    });
