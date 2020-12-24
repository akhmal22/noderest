const url = require('url');
const users = require('./userData.js');


const availableEndpoints = [
  {
    method: "GET",
    getUsers: "/users"
  },
  {
    method: "POST",
    createUser: "/user"
  }
]


const NS_PER_SEC = 1e9;
const time = process.hrtime();


exports.getUsers = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  //const diff = process.hrtime(time);
  var response = [
    {
      "message": "Benchmark took + diff[0] * NS_PER_SEC + diff[1] + nanoseconds"
    },
    users
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.createUser = function(req, res) {
  body = '';
  //const diff = process.hrtime(time);

  req.on('data',  function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    postBody = JSON.parse(body);

    var response = [
      {
        "message": "Benchmark took + diff[0] * NS_PER_SEC + diff[1] + nanoseconds"
      },
      postBody
    ]

    res.statusCode = 201;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
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
