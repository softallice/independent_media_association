// const Knex = require("knex");
const tableNames = require("../lib/tableNames");
const {
  addDefaultColumns,
  createNameTable,
  references,
  createJoinTable,
} = require("../lib/migration_functions.js");

exports.up = async (knex) => {
  await createJoinTable(
    knex,
    tableNames.related_post,
    tableNames.post,
    tableNames.post
  );
  await createJoinTable(
    knex,
    tableNames.join__post_and_images,
    tableNames.post,
    tableNames.image_url
  );
  await createJoinTable(
    knex,
    tableNames.join__users_and_user_preferences,
    tableNames.users,
    tableNames.user_preferences
  );
  await createJoinTable(
    knex,
    tableNames.join__users_and_user_type,
    tableNames.users,
    tableNames.user_type
  );
  await createJoinTable(
    knex,
    tableNames.join__post_and_author,
    tableNames.post,
    tableNames.author
  );
  await createJoinTable(
    knex,
    tableNames.join__post_and_keywords,
    tableNames.post,
    tableNames.keywords
  );
  await createJoinTable(
    knex,
    tableNames.join__keywords_and_images,
    tableNames.keywords,
    tableNames.image_url
  );
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.related_post,
      tableNames.join__keywords_and_images,
      tableNames.join__post_and_author,
      tableNames.join__post_and_images,
      tableNames.join__post_and_keywords,
      tableNames.join__users_and_user_preferences,
      tableNames.join__users_and_user_type,
    ].map((tableName) => knex.schema.dropTable(tableName))
  );
};
