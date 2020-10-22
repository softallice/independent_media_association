const tableNames = require('../lib/tableNames');
const {
  addDefaultColumns,
  createNameTable,
} = require('../lib/migration_functions.js');

exports.up = async (knex) => {
  await Promise.all([
    createNameTable(knex, tableNames.tag),
    createNameTable(knex, tableNames.user_type),
    knex.schema.createTable(tableNames.site_preferences, (table) => {
      table.increments().notNullable();
      table.boolean('featured-content-shown').notNullable().defaultTo(0);
      addDefaultColumns(table);
    }),
  ]);
  await knex.schema.createTable(tableNames.image_url, (table) => {
    table.increments().notNullable();
    table.string('name');
    table.string('image_url').notNullable();
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.user_preferences, (table) => {
    table.increments().notNullable();
    table.string('theme').notNullable().defaultTo('Snow');
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.article, (table) => {
    table.increments().notNullable();
    table.string('title').notNullable();
    table.string('blurb', 500);
    table.text('content').notNullable();
    table.text('status').notNullable();
    table.text('slug').notNullable();
    table.boolean('featured').notNullable().defaultTo(false);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.tag,
      tableNames.site_preferences,
      tableNames.image_url,
      tableNames.user_type,
      tableNames.user_preferences,
      tableNames.article,
    ].map((tableName) => knex.schema.dropTable(tableName))
  );
};
