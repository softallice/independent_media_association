const tableNames = require('./tableNames');

module.exports = [
  tableNames.join__image_and_article,
  tableNames.join__tags_and_image,
  tableNames.join__article_and_user,
  tableNames.join__article_and_image,
  tableNames.join__article_and_tag,
  tableNames.join__users_and_user_preferences,
  tableNames.join__users_and_user_type,
  tableNames.related_article,
  tableNames.site_preferences,
  tableNames.article,
  tableNames.image_url,
  tableNames.tags,
  tableNames.user_preferences,
  tableNames.users
];