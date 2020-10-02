const tableNames = require('./tableNames')

module.exports = [
    tableNames.join__image_and_post,
    tableNames.join__keywords_and_images,
    tableNames.join__post_and_author,
    tableNames.join__post_and_images,
    tableNames.join__post_and_keywords,
    tableNames.join__users_and_user_preferences,
    tableNames.join__users_and_user_type,
    tableNames.related_post,
    tableNames.admin_site_preferences,
    tableNames.post,
    tableNames.author,
    tableNames.image_url,
    tableNames.keywords,
    tableNames.user_preferences,
    tableNames.users
]