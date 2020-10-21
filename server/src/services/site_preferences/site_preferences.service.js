// Initializes the `site_preferences` service on path `/site-preferences`
const { SitePreferences } = require('./site_preferences.class');
const createModel = require('../../models/site_preferences.model');
const hooks = require('./site_preferences.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/site-preferences', new SitePreferences(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('site-preferences');

  service.hooks(hooks);
};
