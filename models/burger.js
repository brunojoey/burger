var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (cols, vals, id, cb) {
    orm.updateOne("burgers", cols, vals, id, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
