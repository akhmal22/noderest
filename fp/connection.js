import mysql from 'mysql'; // DBMS

const connection = mysql.createConnection({
  host: "localhost",
  user: "noderest",
  password: "node123",
  database: "noderest"
});

connection.connect(function(err){
  if(err) throw err;
});

export default connection;
