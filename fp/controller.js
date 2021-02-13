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
// 1. GET see all five rows in criminal ('/criminal/all')
export function getAllFive(callback){
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
// 2. POST add a row to criminal ('/criminal')
export function postAddArow(body, callback){
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
// 3. PUT modify a criminal's row's status ('/criminal/status/:id')
export function putACriminalsStatus(body, params, callback){
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
// 4. DELETE delete a row from criminal ('/criminal/:id')
export function deleteARow(params, callback){
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
// 5. GET see a criminal's row's based on id ('/criminal/:id')
export function getACriminal(params, callback){
  connection.query('SELECT * FROM kriminal WHERE id = ?',
  [ parseInt(params) ],
  function(error, rows, fields){
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
// 6. PATCH modify a criminal's row's status ('/criminal/status/:id')
export function patchACriminalsStatus(body, params, callback){
  connection.query('UPDATE kriminal SET status = ? WHERE id = ?',
  [body.status, parseInt(params)],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "PATCH operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "PATCH operation success!",
          "status": 200
        }
      ];
      return callback(error, response);
    }
  })
}
// 7. HEAD see a criminal's row's based on id ('/criminal/:id')
export function headACriminal(params, callback){
  connection.query('SELECT * FROM kriminal WHERE id = ?',
  [ parseInt(params) ],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "HEAD operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "HEAD operation success!",
          "status": 200
        },
        rows,
      ];
      return callback(error, response);
    }
  })
}
// 8. PUT modify a criminal's row's act ('/criminal/act/:id')
export function putACriminalsAct(body, params, callback){
  connection.query('UPDATE kriminal SET tindak = ? WHERE id = ?',
  [body.tindak, parseInt(params)],
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
// 9. POST modify a criminal's row's act ('/criminal/act/:id')
export function postACriminalsAct(body, params, callback){
  connection.query('UPDATE kriminal SET tindak = ? WHERE id = ?',
  [body.tindak, parseInt(params)],
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
          "status": 200
        }
      ];
      return callback(error, response);
    }
  })
}
// 10. PATCH modify a criminal's row's act ('/criminal/act/:id')
export function patchACriminalsAct(body, params, callback){
  connection.query('UPDATE kriminal SET tindak = ? WHERE id = ?',
  [body.tindak, parseInt(params)],
  function(error, rows, fields){
    if(error){
      var response = [
        {
          "message": "PATCH operation failed!",
          "status": 400
        },
      ];
      return callback(error, response);
    }else{
      var response = [
        {
          "message": "PATCH operation success!",
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

export function underConstruction(method){
  var response = [
    {
      "message": method + " endpoint under construction",
      "status": 501
    }
  ];

  return response;
}
