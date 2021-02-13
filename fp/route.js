import * as control from './controller.js';
import util from 'util';
const NS_PER_SEC = 1e9;

export default function server(engine){
  return engine.createServer((req, res) => {
    // 1. GET see all five rows in criminal ('/criminal/all')
    if(req.url.match(/\/criminal\/all+/) !== null && req.method === 'GET') {
      control.getAllFive(function(error, data){
        var response = [];
        if(error){
          res.statusCode = 400;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      });
    }
    // 2. POST add a row to criminal ('/criminal')
    else if(req.url == '/criminal' && req.method === 'POST') {
      var body = '';

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var postBody = JSON.parse(body);
        control.postAddArow(postBody, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // 3. PUT modify a criminal's row's status ('/criminal/status/:id')
    else if(req.url.match(/\/criminal\/status\/[0-9]+/) !== null && req.method === 'PUT'){
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var putBody = JSON.parse(body);
        control.putACriminalsStatus(putBody, params, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // 4. DELETE delete a row from criminal ('/criminal/:id')
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
      var params = /[^/]*$/.exec(req.url)[0];
      control.deleteARow(params, function(error, data){
        var response = [];
        if(error){
          response = data;
          res.statusCode = 400;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      })
    }
    // 5. GET see a criminal's row's based on id ('/criminal/:id')
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'GET'){
      var params = /[^/]*$/.exec(req.url)[0];
      control.getACriminal(params, function(error, data){
        var response = [];
        if(error){
          res.statusCode = 400;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      });
    }
    // 6. PATCH modify a criminal's row's status ('/criminal/status/:id')
    else if(req.url.match(/\/criminal\/status\/[0-9]+/) !== null && req.method === 'PATCH'){
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var patchBody = JSON.parse(body);
        control.patchACriminalsStatus(patchBody, params, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // 7. HEAD see a criminal's row's based on id ('/criminal/:id')
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'HEAD'){
      var params = /[^/]*$/.exec(req.url)[0];
      control.headACriminal(params, function(error, data){
        var response = [];
        if(error){
          res.statusCode = 400;
        }else{
          response = data;
          res.statusCode = 200;
        }
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      });
    }
    // 8. PUT modify a criminal's row's act ('/criminal/act/:id')
    else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'PUT'){
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var putBody = JSON.parse(body);
        control.putACriminalsAct(putBody, params, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // 9. POST modify a criminal's row's act ('/criminal/act/:id')
    else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'POST'){
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var postBody = JSON.parse(body);
        control.postACriminalsAct(postBody, params, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // 10. PATCH modify a criminal's row's act ('/criminal/act/:id')
    else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'PATCH'){
      var body = '';
      var params = /[^/]*$/.exec(req.url)[0];

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var patchBody = JSON.parse(body);
        control.patchACriminalsAct(patchBody, params, function(error, data){
          var response = [];
          if(error){
            response = data;
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
    // invalid URL
    else {
      res.statusCode = 404;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(control.invalidUrl()));
    }
  })
}
