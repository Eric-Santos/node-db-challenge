exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resource").then(function () {
    // Inserts seed entries
    return knex("resource").insert([
      { resource_name: "computer", project_id: 1 },
    ]);
  });
};
