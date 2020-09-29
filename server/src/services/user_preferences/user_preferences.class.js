const { Service } = require('feathers-knex');

exports.UserPreferences = class UserPreferences extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'user_preferences'
    });
  }
};
