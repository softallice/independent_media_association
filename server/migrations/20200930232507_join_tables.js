// const Knex = require("knex");
const tableNames = require('../lib/tableNames');
const {
  createJoinTable,
} = require('../lib/migration_functions.js');

exports.up = async (knex) => {
  await createJoinTable(
    knex,
    tableNames.related_article,
    tableNames.article,
    tableNames.article
  );
  await createJoinTable(
    knex,
    tableNames.join__article_and_image,
    tableNames.article,
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
    tableNames.join__article_and_user,
    tableNames.article,
    tableNames.users
  );
  await createJoinTable(
    knex,
    tableNames.join__article_and_tag,
    tableNames.article,
    tableNames.tag
  );
  await createJoinTable(
    knex,
    tableNames.join__tag_and_image,
    tableNames.tag,
    tableNames.image_url
  );
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.related_article,
      tableNames.join__tag_and_image,
      tableNames.join__article_and_user,
      tableNames.join__article_and_image,
      tableNames.join__article_and_tag,
      tableNames.join__users_and_user_preferences,
      tableNames.join__users_and_user_type,
    ].map((tableName) => knex.schema.dropTable(tableName))
  );
};
