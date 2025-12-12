//Cites:
//thorough2-map -  installed through $ npm install through2-map
const http = require('http');
const map = require('through2-map');

//get the port num
const port = process.argv[2];
//create the server
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    //converting each chunk to uppercase   
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.end('send POST\n'); //respond with error for non-post request 
  }
});

//listen to the port
server.listen(port);