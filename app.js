const http = require('http');

const ip = '127.0.0.1';
const port = 2000;

const server = http.createServer((req, res) => {
// console.log(req);
res.statusCode = 200
res.setHeader('Content-type', 'text/plain');
res.end('Server lay Jen-par-lekso!');
});

server.listen(port, ip, () => console.log('Server running...'));