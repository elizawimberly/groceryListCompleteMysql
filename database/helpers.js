/*
require server controllers?

create helpers obj
methods will correspond with controllers methods
ex. get, post

method will take callback
method will use controller function(err, result)
if err, callback(err)
else callback(null, result)

export

*/

const db = require('./database_init');

var helpers = {
  getAll: function(callback) {
    var queryString = 'SELECT * from grocerylist;';
    db.query(queryString, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  post: function(data, callback) {

    var queryString = `INSERT INTO grocerylist (item, quantity) VALUES ('${data.item}', ${data.quantity});`

    // var queryString = "INSERT INTO grocerylist (item, quantity) VALUES ('cookies', 8);"

    db.query(queryString, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}


module.exports = helpers;