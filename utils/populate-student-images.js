const fs = require('fs');
const path = require('path');
const request = require('request');

const studentImgPath = path.join(__dirname, '../react-ui/src/fixtures/student-images');
const randomUserApiURL = 'https://randomuser.me/api/portraits';

const download = function(uri, filename){
  request.head(uri, function(err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', () => {});
  });
};

for (let i = 0; i < 10; i++) {
  download(`${randomUserApiURL}/men/${i + 1}.jpg`, `${studentImgPath}/men-${i + 1}.jpg`);
  download(`${randomUserApiURL}/women/${i + 1}.jpg`, `${studentImgPath}/women-${i + 1}.jpg`);
}
