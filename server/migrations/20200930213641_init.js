// const Knex = require("knex");
const tableNames = require('../lib/tableNames');
const {
  addDefaultColumns,
  createNameTable,
} = require('../lib/migration_functions.js');

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.author, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable().defaultTo('Anonymous');
      table.string('email').unique();
      addDefaultColumns(table);
    }),
    createNameTable(knex, tableNames.keywords),
    createNameTable(knex, tableNames.user_type),
    knex.schema.createTable(tableNames.admin_site_preferences, (table) => {
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
    table.string('theme').notNullable().defaultTo('White');
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.post, (table) => {
    table.increments().notNullable();
    table.string('title').notNullable();
    table.string('blurb', 500);
    table.text('content');
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.keywords,
      tableNames.admin_site_preferences,
      tableNames.image_url,
      tableNames.author,
      tableNames.user_type,
      tableNames.user_preferences,
      tableNames.post,
    ].map((tableName) => knex.schema.dropTable(tableName))
  );
};
