const db = require("../../data/db-config");

module.exports = {
  find,
  add,
  findById,
  update,
  remove,
};

function find() {
  return db("task");
}

function findById(id) {
  return db("task").where({ id }).first();
}

function add(projectData) {
  return db("task").insert(projectData);
}

function update(id, changes) {
  return db("task").where({ id }).update(changes);
}

function remove(id) {
  return db("task").where({ id }).del();
}
