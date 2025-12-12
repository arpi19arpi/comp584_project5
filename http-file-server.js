const http = require('http');
const fs = require('fs');

//get the port number 
const port = process.argv[2];

//get the file path to serve
const filePath = process.argv[3];

//create a server
const server = http.createServer((req, res) => {

    //successful response header
    res.writeHead(200, { 'content-type': 'text/plain' });

    //created a readable stream for the file
    const fileStream = fs.createReadStream(filePath);

    //pipe the file stream directly to the http response
    fileStream.pipe(res);

});

//start listening on the port
server.listen(port);


//Cites: 
//strean piping: https://nodejs.org/api/stream.html#readablepipedestination-options 