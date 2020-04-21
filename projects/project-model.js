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
function findById(id) {
  return db("projects").where({ id }).first();
}
//needs work
function add(schemeData) {
  return db("projects").insert(schemeData);
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
