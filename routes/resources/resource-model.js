const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

//resource models

function find() {
  return db("resource");
}

async function findById(id) {
  try {
    const projectResources = await db("projects")
      .join("resource", "resource.project_id", "projects.id")
      .select(
        "resource.id",
        "projects.project_name",
        "resource.project_id as pid",
        "projects.description",
        "resource.description"
      )
      .where({ "resource.id": id });
    return projectResources;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function add(resourceData) {
  return db("resources").insert(resourceData);
}
function update(id, changes) {
  return db("resource").where({ id }).update(changes);
}

function remove(id) {
  return db("resource").where({ id }).del();
}
