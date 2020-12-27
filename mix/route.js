const http = require('http');

module.exports = http.createServer((req, res) => {

  var userOps = require('./controller.js'); // importing the main logic

  // GET endpoint
  if(req.url == '/criminal/all' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);

    userOps.getUsers(req, res);
  }

  // POST endpoint
  else if(req.url == '/criminal' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.updateUser(req, res);
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.deleteUser(req, res);
  }

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.invalidUrl(req, res);
  }
})
