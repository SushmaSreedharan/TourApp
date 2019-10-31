const rp = require('request-promise-native');

let options = {
    uri: 'http://127.0.0.1:3000/tours/add',
    method: 'POST', 
    form: {
        "name": "Snape's class",
        "date": "Starting June 2020"
        },
    json: true,
    resolveWithFullResponse: true
};
rp(options)
    .then(function (res) {
        debugger;
    var addedTour = res.body;
    console.log(addedTour);
addedTour.map((newTour, i)=>{
    console.log(`Tour ${i+1} name ${newTour['name']}, date ${newTour['date']}`);
});
  console.log(`I'm the body ${res.body}`);
    });
    