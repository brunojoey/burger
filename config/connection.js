// mysql://nld9y9seikt0wd1i:e41qcuuow33pkqsd@zy4wtsaw3sjejnud.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lwz2ko4048mv7bu5
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "zy4wtsaw3sjejnud.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nld9y9seikt0wd1i",
    password: "e41qcuuow33pkqsd",
    database: "lwz2ko4048mv7bu5"
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