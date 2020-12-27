const mysql = require('mysql'); // DBMS

const db = mysql.createConnection({
  host: "localhost",
  user: "noderest",
  password: "karet355",
  database: "noderest"
});

db.connect(function(err){if(err) throw err});

module.exports = db;
