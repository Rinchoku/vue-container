const http = require("http");
const fs = require('fs');

const hostname = "0.0.0.0";
const port = 80;

const server = http.createServer((req, res) => {
  const path = "./html" + req.url;

  fs.readFile(path, function(error, content) {
      if (error) {
          if(error.code == 'ENOENT') {
              fs.readFile('./html/errors/404.html', function(error, content) {
                  res.writeHead(404, { 'Content-Type': 'text/html' });
                  res.end(content, 'utf-8');
              });
          }
          else {
              res.writeHead(500);
              res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
          }
      }
      else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
      }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});