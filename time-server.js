const net = require('net');

//getting  port number from command line
const port = process.argv[2];

//creating TCP server
const server = net.createServer((socket) => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const dateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    socket.write(dateTime + '\n');
    socket.end();
});

// listen on the provided port
server.listen(port);

// Cites:
// net.createServer()-  https://nodejs.org/api/net.html#netcreateserveroptions-connectionlistener 
// socket.write()- https://nodejs.org/api/net.html#socketwritebuffer-encoding-callback
// socket.end()- https://nodejs.org/api/net.html#socketenddata-encoding-callback 
// server.listen()- https://nodejs.org/api/net.html#serverlisten 