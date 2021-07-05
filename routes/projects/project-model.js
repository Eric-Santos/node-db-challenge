const db = require("../../data/db-config");

module.exports = {
  find,
  add,
  findById,
  update,
  remove,
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function add(projectData) {
  return db("projects").insert(projectData);
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
