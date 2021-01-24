import http from 'http';
import util from 'util';

import Controller from './controller.js'; // importing the main logic

const NS_PER_SEC = 1e9;

const server = http.createServer((req, res) => {

  var control = new Controller();


  // GET endpoint
  if(req.url == '/criminal/all' && req.method === 'GET') {
    //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    var hrStart = process.hrtime();
    var memStart = process.memoryUsage().heapUsed;
    //console.info('start:\n' + util.inspect(process.memoryUsage()));
    // --- GET function call ---
    control.getUsers(req, res);
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
    control.createUser(req, res);
    // --- end of function call ---
    //console.info('end:\n' + util.inspect(process.memoryUsage()));
    var memEnd = process.memoryUsage().heapUsed;
    let hrEnd = process.hrtime(hrStart);
    console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "POST");
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'PUT'){
    //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    var hrStart = process.hrtime();
    var memStart = process.memoryUsage().heapUsed;
    //console.info('start:\n' + util.inspect(process.memoryUsage()));
    // --- PUT function call ---
    control.updateUser(req, res);
    // --- end of function call ---
    //console.info('end:\n' + util.inspect(process.memoryUsage()));
    var memEnd = process.memoryUsage().heapUsed;
    let hrEnd = process.hrtime(hrStart);
    console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "PUT");
  }

  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
    //console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    var hrStart = process.hrtime();
    var memStart = process.memoryUsage().heapUsed;
    //console.info('start:\n' + util.inspect(process.memoryUsage()));
    // --- DELETE function call ---
    control.deleteUser(req, res);
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
    control.invalidUrl(req, res);
    // --- end of function call ---
    //console.info('end:\n' + util.inspect(process.memoryUsage()));
    var memEnd = process.memoryUsage().heapUsed;
    let hrEnd = process.hrtime(hrStart);
    console.log(hrEnd[0] * NS_PER_SEC + hrEnd[1] +","+ (memEnd - memStart) + "," + "INVALID");
  }
})

export default server;
