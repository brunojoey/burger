const connection = require("./connection");

var orm = {
  selectAll: function (tableInput, cb) {
    const query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    const query = `INSERT INTO ${table} (${cols}) VALUES (?);`;
    connection.query(query, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, cols, vals, id, cb) {
    const query = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id};`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(table, condition, cb) {
		var query = "DELETE FROM " + table + " WHERE " + condition;

    connection.query(query, function(err,result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;