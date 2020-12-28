import http from 'http';

import Controller from './controller.js'; // importing the main logic

const server = http.createServer((req, res) => {

  var control = new Controller(req, res);

  // GET endpoint
  if(req.url == '/criminal/all' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    control.getUsers(req, res);
  }

  // POST endpoint
  else if(req.url == '/criminal' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    control.createUser(req, res);
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    control.updateUser(req, res);
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    control.deleteUser(req, res);
  }

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    control.invalidUrl(req, res);
  }
})

export default server;
