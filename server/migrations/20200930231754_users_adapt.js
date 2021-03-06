exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('name');
    table.string('portrait_url');
    table.string('title');
    table.datetime('deleted_at');
    table.boolean('active');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('name');
    table.dropColumn('title');
    table.dropColumn('portrait_url');
    table.dropColumn('deleted_at');
    table.boolean('active');
  });
};
