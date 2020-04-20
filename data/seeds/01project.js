exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, completed: "false", project_name: "make car payment" },
      ]);
    });
};
