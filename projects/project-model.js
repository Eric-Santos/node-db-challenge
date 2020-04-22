const db = require("../data/db-config.js");

module.exports = {
  findAllProjects,
  findAllTasks,
  findAllTasks,
  findTasks,
  findById,
  addProject,
  addTask,
  addResource,
  update,
  remove,
};

function findAllProjects() {
  return db("projects");
}
function findAllTasks() {
  return db("task");
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
//task
function addTask(taskData) {
  return db("task").insert(taskData);
}
//resource
function addResource(resourceData) {
  return db("resource").insert(resourceData);
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}

//task models
async function findTasks(id) {
  try {
    const projectTasks = await db("projects")
      .join("task", "task.project_id", "projects.id")
      .select(
        "task.id as id",
        "projects.project_name",
        "projects.description",
        "task.description",
        "task.notes",
        "task.completed"
      )
      .where({ project_id: id });
    return projectTasks;
  } catch (error) {
    console.log(error);
    return error;
  }
}
