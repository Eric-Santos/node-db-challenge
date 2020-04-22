const db = require("../data/db-config.js");

module.exports = {
  find,
  // add,
  // update,
  // remove,
};

function find() {
  return db("resource");
}
