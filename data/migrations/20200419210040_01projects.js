exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl.text("project_name", 128).unique().notNullable();
      tbl.text("description");
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.boolean("completed").defaultTo(false);
      tbl.text("description", 128).notNullable().unique();
      tbl.text("notes");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.text("resource_name", 128).unique().notNullable();
      tbl.text("description");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("projects");
};
