const users = require('./users/users.service.js');
const author = require('./author/author.service.js');
const keywords = require('./keywords/keywords.service.js');
const userType = require('./user_type/user_type.service.js');
const adminSitePreferences = require('./admin_site_preferences/admin_site_preferences.service.js');
const imageUrl = require('./image_url/image_url.service.js');
const userPreferences = require('./user_preferences/user_preferences.service.js');
const post = require('./post/post.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(author);
  app.configure(keywords);
  app.configure(userType);
  app.configure(adminSitePreferences);
  app.configure(imageUrl);
  app.configure(userPreferences);
  app.configure(post);
};
