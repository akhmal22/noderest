const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

  var userOps = require('./controller.js'); // importing the main logic
  const reqUrl =  url.parse(req.url, true);

  // GET endpoint
  if(reqUrl.pathname == '/criminal/all' || '/criminal/all/' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);

    userOps.getUsers(req, res);
  }

  // POST endpoint
  else if(reqUrl.pathname == '/criminal' || '/criminal/' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);
  }

  else if(reqUrl.pathname.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.updateUser(req, res);
  }

  else if(reqUrl.pathname.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.deleteUser(req, res);
  }

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.invalidUrl(req, res);
  }
})
