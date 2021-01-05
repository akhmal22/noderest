import {getQuery, postQuery, putQuery, deleteQuery, invalidUrl } from './controller.js';

export default function server(engine){
  return engine.createServer((req, res) => {
    if(req.url == '/criminal/all' && req.method === 'GET') {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      getQuery(function(error, data){
        var response = [];
        if(error){
          res.statusCode = error.code;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      });
    }
    // POST endpoint
    else if(req.url == '/criminal' && req.method === 'POST') {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var body = '';

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var postBody = JSON.parse(body);
        postQuery(postBody, function(error, data){
          var response = [];
          if(error){
            res.statusCode = 400;
          }else{
            response = data;
            res.statusCode = 201;
          }
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        })
      })
    }
    // PUT endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var putBody = JSON.parse(body);
        putQuery(putBody, params, function(error, data){
          var response = [];
          if(error){
            res.statusCode = 400;
          }else{
            response = data;
            res.statusCode = 200;
          }
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        })
      })
    }
    // delete endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var params = /[^/]*$/.exec(req.url)[0];
      deleteQuery(params, function(error, data){
        var response = [];
        if(error){
          res.statusCode = 400;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      })
    }
    // invalid URL
    else {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      res.statusCode = 404;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(invalidUrl()));
    }
  })
}
