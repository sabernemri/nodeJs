const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end('<h1>Hello Node !!!!</h1>\n');
});

server.listen(4000, () => {
  console.log('Le serveur est démarré sur http://localhost:4000');
});
