// const Knex = require("knex");
const tableNames = require("../lib/tableNames");
const {
  addDefaultColumns,
  createNameTable,
  references,
  createJoinTable,
} = require("../lib/migration_functions.js");

exports.up = async (knex) => {
  await Promise.all([
    // knex.schema.createTable(tableNames.user, (table) => {
    //   table.increments().notNullable();
    //   table.string("name").notNullable();
    //   table.string("email").notNullable().unique();
    //   table.string("password").notNullable();
    //   addDefaultColumns(table);
    // }),
    knex.schema.createTable(tableNames.author, (table) => {
      table.increments().notNullable();
      table.string("name").notNullable().defaultTo("Anonymous");
      table.string("email").unique();
      addDefaultColumns(table);
    }),
    createNameTable(knex, tableNames.keywords),
    createNameTable(knex, tableNames.user_type),
    knex.schema.createTable(tableNames.admin_site_preferences, (table) => {
      table.increments().notNullable();
      table.boolean("featured-content-shown").notNullable().defaultTo(0);
      addDefaultColumns(table);
    }),
  ]);
  await knex.schema.createTable(tableNames.image_url, (table) => {
    table.increments().notNullable();
    table.string("name");
    table.string("image_url").notNullable();
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.user_preferences, (table) => {
    table.increments().notNullable();
    table.string("theme").notNullable().defaultTo("White");
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.post, (table) => {
    table.increments().notNullable();
    table.string("title").notNullable();
    table.string("blurb", 500);
    table.text("content");
    addDefaultColumns(table);
  });
  // await createJoinTable(
  //   knex,
  //   tableNames.related_post,
  //   tableNames.post,
  //   tableNames.post
  // );
  // await createJoinTable(
  //   knex,
  //   tableNames.join__post_and_images,
  //   tableNames.post,
  //   tableNames.image_url
  // );
  // await createJoinTable(
  //   knex,
  //   tableNames.join__users_and_user_preferences,
  //   tableNames.users,
  //   tableNames.user_preferences
  // );
  // await createJoinTable(
  //   knex,
  //   tableNames.join__users_and_user_type,
  //   tableNames.users,
  //   tableNames.user_type
  // ),
  //   await createJoinTable(
  //     knex,
  //     tableNames.join__post_and_author,
  //     tableNames.post,
  //     tableNames.author
  //   ),
  //   await createJoinTable(
  //     knex,
  //     tableNames.join__post_and_keywords,
  //     tableNames.post,
  //     tableNames.keywords
  //   ),
  //   await createJoinTable(
  //     knex,
  //     tableNames.join__keywords_and_images,
  //     tableNames.keywords,
  //     tableNames.image_url
  //   );
  // await createJoinTable(
  //   knex,
  //   tableNames.join__image_and_post,
  //   tableNames.post,
  //   tableNames.image_url
  // );
};

exports.down = async (knex) => {
  await Promise.all(
    [
      // tableNames.join__image_and_post,
      // tableNames.join__keywords_and_images,
      // tableNames.join__post_and_author,
      // tableNames.join__post_and_images,
      // tableNames.join__post_and_keywords,
      // tableNames.join__users_and_user_preferences,
      // tableNames.join__users_and_user_type,
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
