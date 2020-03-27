const connection = require("./connection");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        connection.query("SELECT * FROM ")
    },

    insertOne: function(tableInput, colToSearch, valOfCol) {
        connection.query("INSERT INTO burgers (burger_name, devoured)")

    },

    updateOne: function(tableInput, colToSearch, valOfCol) {

    }
}

module.exports = orm;