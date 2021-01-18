const hostname = '127.0.0.1';
const port = 3000;

import server from './route.js'; // imports the routing file

server.listen(port, hostname, () => {
  console.log("Time, Memory");
});
