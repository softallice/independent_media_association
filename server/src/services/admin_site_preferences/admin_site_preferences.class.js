const { Service } = require('feathers-knex');

exports.AdminSitePreferences = class AdminSitePreferences extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'admin_site_preferences'
    });
  }
};
