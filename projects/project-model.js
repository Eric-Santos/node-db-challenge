const db = require("../data/db-config.js");

module.exports = {
  findAllProjects,
  addProject,
  findById,
  update,
  remove,
  findAllTasks,
  findTasks,
  addTask,
  findAllResources,
  findResourcesById,
  addResource,
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

//task models
function findAllTasks() {
  return db("task");
}

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

function addTask(taskData) {
  return db("task").insert(taskData);
}

//resource models

function findAllResources() {
  return db("resource");
}

async function findResourcesById(id) {
  try {
    const projectResources = await db("projects")
      .join("resource", "resource.project_id", "projects.id")
      .select(
        "resource.id as id",
        "projects.project_name",
        "projects.description",
        "resource.description",
        "resource.notes",
        "resource.completed"
      )
      .where({ project_id: id });
    return projectResources;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function addResource(resourceData) {
  return db("resources").insert(resourceData);
}
