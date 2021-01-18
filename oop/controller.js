import connection from './connection.js';

const NS_PER_SEC = 1e9;
const time = process.hrtime();

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

export default class Controller{
  constructor(){
  }

  getUsers(req, res){
    connection.query('SELECT * FROM kriminal WHERE id BETWEEN 1 AND 5', function(error, rows, fields){
      if(error){
        var response = [
          {
            "message": "GET operation failed!",
            "status": 400
          },
          error.code
        ];
        res.statusCode = error.code;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }else{
        var response = [
          {
            "message": "GET operation success!",
            "status": 200
          },
          rows
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }
    })
  }

  createUser(req, res){
    var body = '';

    req.on('data',  function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      const postBody = JSON.parse(body);

      connection.query('INSERT INTO kriminal (nama, umur, tindak, status) VALUES (?,?,?,?)',
      [postBody.nama, postBody.umur, postBody.tindak, postBody.status],
      function(error, rows, fields){
        if(error){
          var response = [
            {
              "message": "POST operation failed!",
              "status": 400
            },
          ];
          res.statusCode = 400;
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        }else{
          var response = [
            {
              "message": "POST operation success!",
              "status": 201
            }
          ];
          res.statusCode = 201;
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        }
      })

    })
  }

  updateUser(req, res){
    var body = '';
    var params = /[^/]*$/.exec(req.url)[0];

    req.on('data',  function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      const putBody = JSON.parse(body);

      connection.query('UPDATE kriminal SET status = ? WHERE id = ?',
      [putBody.status, parseInt(params)],
      function(error, rows, fields){
        if(error){
          var response = [
            {
              "message": "PUT operation failed!",
              "status": 400
            },
          ];
          res.statusCode = 400;
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        }else{
          var response = [
            {
              "message": "PUT operation success!",
              "status": 200
            }
          ];
          res.statusCode = 200;
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        }
      })

    })
  }

  deleteUser(req, res){
    var params = /[^/]*$/.exec(req.url)[0];

    connection.query('DELETE FROM kriminal WHERE id = ?',
    [ parseInt(params)],
    function(error, rows, fields){
      if(error){
        var response = [
          {
            "message": "DELETE operation failed!",
            "status": 400
          },
        ];
        res.statusCode = 400;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }else{
        var response = [
          {
            "message": "DELETE operation success!",
            "status": 200
          }
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
      }
    })
  }

  invalidUrl(req, res){
    var response = [
      {
      "message": "wrong endpoint",
      "status": 404
      }
    ]
    res.statusCode = 404;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
  }
}
