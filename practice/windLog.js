const rp = require('request-promise-native');

let options = {
    uri: 'https://windsurf.grotto-networking.com/data/logs/windEvents2014.json',
    method: 'GET', 
    json: true,
};
rp(options)
    .then(function (res) {
        debugger;
    //   console.log(`Grotto status: ${JSON.stringify(res)}`);
     var val,avgSpeed=0,maxDis=0;
     for( val in res){
        avgSpeed= Math.max(res[val].max10sec,avgSpeed);
      maxDis= Math.max(res[val].distance,maxDis);
        }
        console.log(`The number of sailing sessions in 2014 was: ${res.length}` );
        console.log(`The fastest 10 second speed average was: ${avgSpeed}`);
        console.log(`The longest single day distance was: ${maxDis} `);
    });
