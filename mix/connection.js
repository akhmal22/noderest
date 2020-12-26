const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "noderest",
  password: "karet355",
  database: "noderest"
});

con.connect(function(err){
  if(err) throw err;
});

module.exports = con;
