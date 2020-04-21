exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task").then(function () {
    // Inserts seed entries
    return knex("task").insert([{ description: "call bank", project_id: 1 }]);
  });
};
