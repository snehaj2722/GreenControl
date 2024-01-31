let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'igreen'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
  var sql="INSERT INTO login(Name,AadharNo,TempAdd,PermAdd,phNum,Email,position) VALUES(name)"

});