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
  constructor(req, res){
    this.req = req;
    this.res = res;
  }

  getUsers(req, res){
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
              "message": "POST operation failed!"
            },
          ];
          res.statusCode = 400;
          res.setHeader('content-Type', 'Application/json');
          res.end(JSON.stringify(response));
        }else{
          var response = [
            {
              "message": "POST operation success!"
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
              "message": "PUT operation failed!"
            },
          ];
          res.statusCode = 400;
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

  deleteUser(req, res){
    var params = /[^/]*$/.exec(req.url)[0];

    connection.query('DELETE FROM kriminal WHERE id = ?',
    [ parseInt(params)],
    function(error, rows, fields){
      if(error){
        var response = [
          {
            "message": "DELETE operation failed!"
          },
        ];
        res.statusCode = 400;
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

  invalidUrl(req, res){
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
}
