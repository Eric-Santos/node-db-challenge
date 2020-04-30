const db = require("../../data/db-config");

module.exports = {
  findAllResources,
  findResourcesById,
  addResource,
  update,
  remove,
};

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
function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
