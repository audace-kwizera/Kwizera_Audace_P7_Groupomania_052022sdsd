var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "JESUSmylove2022$"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
