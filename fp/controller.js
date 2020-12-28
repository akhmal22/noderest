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
  connection.query('SELECT * FROM kriminal', function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "GET operation failed!",
          "status": error.code
        },
      ];
      callback(error, null);
    }else{
      var response = [
        {
          "message": "GET operation success!",
          "status": 200
        },
        rows,
      ];
      callback(null, response);
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
          "status": error.code
        },
      ];
      callback(error, null);
    }else{
      var response = [
        {
          "message": "POST operation success!",
          "status": 200
        }
      ];
      callback(null, response);
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
          "status": error.code
        },
      ];
      callback(error, null);
    }else{
      var response = [
        {
          "message": "PUT operation success!",
          "status": 200
        }
      ];
      callback(null, response);
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
          "status": error.code
        },
      ];
      callback(error, null);
    }else{
      var response = [
        {
          "message": "DELETE operation success!",
          "status": 200
        }
      ];
      callback(null, response);
    }
  })
}

export function invalidUrl(){
  var response = [
    {
      "message": "oops! that is a wrong endpoint, here are the available endpoints ",
      "status": 404
    },
    availableEndpoints
  ];

  return response;
}
