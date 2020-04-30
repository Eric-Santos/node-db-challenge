const db = require("../../data/db-config");

module.exports = {
  findAllProjects,
  addProject,
  findById,
  update,
  remove,
  findAllResources,
};

function findAllProjects() {
  return db("projects");
}

function findAllResources() {
  return db("resource");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function addProject(projectData) {
  return db("projects").insert(projectData);
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
