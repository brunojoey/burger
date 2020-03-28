const connection = require("./connection");

function objectSQL(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        };

        arr.push(key + "=" + value);
      };
    };
      return arr.toString();
  };
  

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM ", function(err,result) {
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: function(cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ?,?", function(err, result) {
            if(err) throw err;
            cb(result);
        });

    },

    updateOne: function(objColVals, condition, cb) {
        var query = "UPDATE burgers (burger_name, devoured)"
        query += " SET ";
        query += objectSQL(objColVals);
        query += " WHERE ";
        query += condition;
    
        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;