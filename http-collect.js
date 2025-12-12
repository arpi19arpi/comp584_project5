const http = require('http');
const url = process.argv[2];

//make http get request
http.get(url, (response) => {

  // convert buffer chunks into strings
  response.setEncoding('utf8');

  let data = '';

  //collect data chunks
  response.on('data', (chunk) => {
    data += chunk;
  });

  //when response ends: print length and data
  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });

  //if any stream errors:
  response.on('error', (err) => {
    console.error(err);
  });

}).on('error', (err) => {
  console.error(err); //if any request errors
});     

//cites:
//stream data - https://nodejs.org/api/stream.html#event-data
//response.setEncoding - https://nodejs.org/api/stream.html#readablesetencodingencoding