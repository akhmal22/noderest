const url = require('url');
const users = require('./userData.js');
const connection = require('./connection.js');


const availableEndpoints = [
  {
    method: "GET",
    getUsers: "/criminal/all"
  },
  {
    method: "POST",
    createUser: "/criminal"
  },
  {
    method: "PUT",
    updateUser: "/criminal/:id"
  },
  {
    method: "DELETE",
    deleteUser: "/criminal/:id"
  }
]


const NS_PER_SEC = 1e9;
const time = process.hrtime();


exports.getUsers = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  //const diff = process.hrtime(time);
  connection.query('SELECT * FROM kriminal', function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "GET operation failed!"
        },
        error.code
      ];
      res.statusCode = error.code;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response));
    }else{
      var response = [
        {
          "message": "GET operation success!"
        },
        rows
      ];
      res.statusCode = 200;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response));
    }
  })
}

exports.createUser = function(req, res) {
  var body = '';

  req.on('data',  function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    postBody = JSON.parse(body);

    connection.query('INSERT INTO kriminal (nama, umur, tindak, status) VALUES (?,?,?,?)',
    [postBody.nama, postBody.umur, postBody.tindak, postBody.status],
    function(error, rows, fields){
      if(error){
        var response = [
          {
            "message": "POST operation failed!"
          },
          error.code
        ];
        res.statusCode = error.code;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }else{
        var response = [
          {
            "message": "POST operation success!"
          }
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }
    })

  })
}

exports.updateUser = function(req, res) {
  var body = '';
  var params = /[^/]*$/.exec(req.url)[0];

  req.on('data',  function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    putBody = JSON.parse(body);

    connection.query('UPDATE kriminal SET status = ? WHERE id = ?',
    [putBody.status, parseInt(params)],
    function(error, rows, fields){
      if(error){
        var response = [
          {
            "message": "PUT operation failed!"
          },
          error.code
        ];
        res.statusCode = error.code;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }else{
        var response = [
          {
            "message": "PUT operation success!"
          }
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }
    })

  })
}

exports.deleteUser = function(req, res) {
  var params = /[^/]*$/.exec(req.url)[0];

  connection.query('DELETE FROM kriminal WHERE id = ?',
  [ parseInt(params)],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "DELETE operation failed!"
        },
        error.code
      ];
      res.statusCode = error.code;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response));
    }else{
      var response = [
        {
          "message": "DELETE operation success!"
        }
      ];
      res.statusCode = 200;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response));
    }
  })
}

exports.invalidUrl = function(req, res) {
  var response = [
    {
    "message": "oops! that is a wrong endpoint, here are the available endpoints "
    },
    availableEndpoints
  ]
  res.statusCode = 404;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
