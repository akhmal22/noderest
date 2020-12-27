function serverEngine() {
  const http = require('http');
  return http;
}

function mainLogic() {
  const userOps = require('./controller.js'); // importing the main logic
  return userOps
}

const hostname = '127.0.0.1';
const port = 3000;

const server = require('./route.js'); // imports the routing file

server(serverEngine(), mainLogic()).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
