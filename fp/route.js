function server(engine, logic){
  return engine.createServer((req, res) => {
    if(req.url == '/criminal/all' && req.method === 'GET') {
      console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      logic.getUsers(req, res);
    }

    // POST endpoint
    else if(req.url == '/criminal' && req.method === 'POST') {
      console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      logic.createUser(req, res);
    }

    // PUT endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
      console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      logic.updateUser(req, res);
    }

    // delete endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
      console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      logic.deleteUser(req, res);
    }

    // invalid URL
    else {
      console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      logic.invalidUrl(req, res);
    }
  })
}

module.exports = server;
