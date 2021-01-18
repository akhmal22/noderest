import connection from './connection.js';

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

export function getQuery(callback){
  connection.query('SELECT * FROM kriminal WHERE id BETWEEN 1 AND 5', function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "GET operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "GET operation success!",
          "status": 200
        },
        rows,
      ];
      return callback(error, response);
    }
  })
}

export function postQuery(body, callback){
  connection.query('INSERT INTO kriminal (nama, umur, tindak, status) VALUES (?,?,?,?)',
  [body.nama, body.umur, body.tindak, body.status],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "POST operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "POST operation success!",
          "status": 201
        }
      ];
      return callback(error, response);
    }
  })
}

export function putQuery(body, params, callback){
  connection.query('UPDATE kriminal SET status = ? WHERE id = ?',
  [body.status, parseInt(params)],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "PUT operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "PUT operation success!",
          "status": 200
        }
      ];
      return callback(error, response);
    }
  })
}

export function deleteQuery(params, callback){
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
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "DELETE operation success!",
          "status": 200
        }
      ];
      return callback(error, response);
    }
  })
}

export function invalidUrl(){
  var response = [
    {
      "message": "wrong endpoint",
      "status": 404
    }
  ];

  return response;
}
