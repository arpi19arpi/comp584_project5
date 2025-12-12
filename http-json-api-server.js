const http = require('http');
const { URL } = require('url');

//getting the port number
const port = process.argv[2];

//http server
const server = http.createServer((req, res) => {

    //parse the request url
    const parsedUrl = new URL(req.url,'http://localhost');

    //the ISO time 
    const iso = parsedUrl.searchParams.get('iso');

    //create Date object from ISO  String
    const date = new Date(iso);

    //handles /api/parsetime endpoint
    if (parsedUrl.pathname ==='/api/parsetime') {
        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(result));
    }

    //handles /api/unixtime endpoint
    else if (parsedUrl.pathname === '/api/unixtime') {
        const result = {
            unixtime: date.getTime()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }

    //handles invalid routes
    else {
        res.writeHead(404);
        res.end();
    }
});

//start listening on the  port
server.listen(port);


//Cites:
//JSON.stringify: https://nodejs.org/api/globals.html#jsonstringifyvalue-replacer-space 