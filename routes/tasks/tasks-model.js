const db = require("../../data/db-config");

module.exports = {
  findAllTasks,
  findTasks,
  addTask,
  update,
  remove,
};

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

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
