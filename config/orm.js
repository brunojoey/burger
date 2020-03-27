const connection = require("./connection");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        connection.query("SELECT * FROM ")
    };

    insertOne: function(tableInput, colToSearch, valOfCol) {

    };

    updateOne: function(tableInput, colToSearch, valOfCol) {

    };
}