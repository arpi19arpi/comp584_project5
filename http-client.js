const http = require('http');
const url = process.argv[2]; //url comes from command line


//make an http get request
http.get(url, (response) => {
  response.setEncoding('utf8'); //set encoding to utf8

  //when data is received, print it
  response.on('data', (chunk) => {
    console.log(chunk);
  });

  //if any errors:
    response.on('error', (err) => {
        console.error(err);
    });
}).on('error', (err) => {
    console.error(err);
}); 

//cites:
//http.get(url, callback) - https://nodejs.org/api/http.html#httpgeturl-options-callback 