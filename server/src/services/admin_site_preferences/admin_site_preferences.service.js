// Initializes the `admin_site_preferences` service on path `/admin-site-preferences`
const { AdminSitePreferences } = require('./admin_site_preferences.class');
const createModel = require('../../models/admin_site_preferences.model');
const hooks = require('./admin_site_preferences.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/admin-site-preferences', new AdminSitePreferences(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('admin-site-preferences');

  service.hooks(hooks);
};
