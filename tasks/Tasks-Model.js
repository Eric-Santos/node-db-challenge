const db = require("../data/db-config.js");

module.exports = {
  find,
  add,
  update,
  remove,
};

function find() {
  return db("task");
}

function add(taskData) {
  return db("task").insert(taskData);
}

function update(id, changes) {
  return db("task").where({ id }).update(changes);
}

function remove(id) {
  return db("task").where({ id }).del();
}
