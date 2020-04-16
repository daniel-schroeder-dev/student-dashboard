const fs = require('fs');
const request = require('request');

const download = function(uri, filename, callback){
  request.head(uri, function(err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://randomuser.me/api/portraits/women/28.jpg', 'test.png', function(){
  console.log('done');
});