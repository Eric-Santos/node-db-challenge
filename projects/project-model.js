const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("projects");
}
