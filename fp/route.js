import {getQuery, postQuery, putQuery, deleteQuery, invalidUrl } from './controller.js';
import util from 'util';
const NS_PER_SEC = 1e9;

export default function server(engine){
  return engine.createServer((req, res) => {
    if(req.url == '/criminal/all' && req.method === 'GET') {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var hrStart = process.hrtime();
      var memStart = process.memoryUsage().heapUsed;
      //console.info('start:\n' + util.inspect(process.memoryUsage()));
      // --- GET function call ---
      getQuery(function(error, data){
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
      // --- end of function call ---
      //console.info('end:\n' + util.inspect(process.memoryUsage()));
      var memEnd = process.memoryUsage().heapUsed;
      let hrEnd = process.hrtime(hrStart);
      console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "GET");
    }
    // POST endpoint
    else if(req.url == '/criminal' && req.method === 'POST') {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var hrStart = process.hrtime();
      var memStart = process.memoryUsage().heapUsed;
      //console.info('start:\n' + util.inspect(process.memoryUsage()));
      // --- POST function call ---
      var body = '';

      req.on('data',  function (chunk) {
        body += chunk;
      });

      req.on('end', function(){
        var postBody = JSON.parse(body);
        postQuery(postBody, function(error, data){
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
      // --- end of function call ---
      //console.info('end:\n' + util.inspect(process.memoryUsage()));
      var memEnd = process.memoryUsage().heapUsed;
      let hrEnd = process.hrtime(hrStart);
      console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "POST");
    }
    // PUT endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var hrStart = process.hrtime();
      var memStart = process.memoryUsage().heapUsed;
      //console.info('start:\n' + util.inspect(process.memoryUsage()));
      // --- PUT function call ---
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
      // --- end of function call ---
      //console.info('end:\n' + util.inspect(process.memoryUsage()));
      var memEnd = process.memoryUsage().heapUsed;
      let hrEnd = process.hrtime(hrStart);
      console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "PUT");
    }
    // delete endpoint
    else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var hrStart = process.hrtime();
      var memStart = process.memoryUsage().heapUsed;
      //console.info('start:\n' + util.inspect(process.memoryUsage()));
      // --- DELETE function call ---
      var params = /[^/]*$/.exec(req.url)[0];
      deleteQuery(params, function(error, data){
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
      // --- end of function call ---
      //console.info('end:\n' + util.inspect(process.memoryUsage()));
      var memEnd = process.memoryUsage().heapUsed;
      let hrEnd = process.hrtime(hrStart);
      console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "DELETE");
    }
    // invalid URL
    else {
      //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
      var hrStart = process.hrtime();
      var memStart = process.memoryUsage().heapUsed;
      //console.info('start:\n' + util.inspect(process.memoryUsage()));
      // --- invalidUrl function call ---
      res.statusCode = 404;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(invalidUrl()));
      // --- end of function call ---
      //console.info('end:\n' + util.inspect(process.memoryUsage()));
      var memEnd = process.memoryUsage().heapUsed;
      let hrEnd = process.hrtime(hrStart);
      console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +", "+ (memEnd - memStart) + "," + "DELETE");
    }
  })
}
