var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) { // database is JAWSDB on heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { //database is local 
    connecttion = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "burgers_db"
    });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;