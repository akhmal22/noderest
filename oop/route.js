import http from 'http';
import util from 'util';

import Controller from './controller.js'; // importing the main logic

const NS_PER_SEC = 1e9;

const server = http.createServer((req, res) => {

  var control = new Controller();


  // 1. GET see all five rows in criminal ('/criminal/all')
  if(req.url.match(/\/criminal\/all+/) !== null && req.method === 'GET') {
    control.getAllFive(req, res);
  }
  // 2. POST add a row to criminal ('/criminal')
  else if(req.url == '/criminal' && req.method === 'POST') {
    control.postAddArow(req, res);
  }
  // 3. PUT modify a criminal's row's status ('/criminal/status/:id')
  else if(req.url.match(/\/criminal\/status\/[0-9]+/) !== null && req.method === 'PUT'){
    control.putACriminalsStatus(req, res);
  }
  // 4. DELETE delete a row from criminal ('/criminal/:id')
  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'DELETE'){
    control.deleteARow(req, res);
  }
  // 5. GET see a criminal's row's based on id ('/criminal/:id')
  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'GET'){
    control.getACriminal(req, res);
  }
  // 6. PATCH modify a criminal's row's status ('/criminal/status/:id')
  else if(req.url.match(/\/criminal\/status\/[0-9]+/) !== null && req.method === 'PATCH'){
    control.patchACriminalsStatus(req, res);
  }
  // 7. HEAD see a criminal's row's based on id ('/criminal/:id')
  else if(req.url.match(/\/criminal\/[0-9]+/) !== null && req.method === 'HEAD'){
    control.headACriminal(req, res);
  }
  // 8. PUT modify a criminal's row's act ('/criminal/act/:id')
  else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'PUT'){
    control.putACriminalsAct(req, res);
  }
  // 9. POST modify a criminal's row's act ('/criminal/act/:id')
  else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'POST'){
    control.postACriminalsAct(req, res);
  }
  // 10. PATCH modify a criminal's row's act ('/criminal/act/:id')
  else if(req.url.match(/\/criminal\/act\/[0-9]+/) !== null && req.method === 'PATCH'){
    control.patchACriminalsAct(req, res);
  }

  // invalid URL
  else {
    control.invalidUrl(req, res);
  }
})

export default server;
