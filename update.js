var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});


con.connect(function(err) {
if (err) throw err;

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Complexo do Alemão 12'";
con.query(sql, function (err, result) {
if (err) throw err;
console.log(result. affectedRows + " record(s) updated");
});
});
