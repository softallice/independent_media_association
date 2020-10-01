exports.up = function (knex) {
    return knex.schema.table("users", (table) => {
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.string("portrait_url");
      table.datetime("deleted_at");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("users", function (table) {
      table.dropColumn("name");
      table.dropColumn("email");
      table.dropColumn("portrait_url");
      table.dropColumn("deleted_at");
    });
  };
  