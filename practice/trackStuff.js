const rp = require('request-promise-native');

let options = {
    uri: 'https://windsurf.grotto-networking.com/data/tracks/track_2014_10_13.json',
    method: 'GET', 
    json: true,
    
};
rp(options)
    .then(function (res) {
        debugger;
        console.log(`The start time of track_2014_1013: ${res.start_time}` );
        console.log(`The start time of track_2014_1013: ${(res.points.length)/60}` );

    });

