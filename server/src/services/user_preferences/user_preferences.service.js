// Initializes the `user_preferences` service on path `/user-preferences`
const { UserPreferences } = require('./user_preferences.class');
const createModel = require('../../models/user_preferences.model');
const hooks = require('./user_preferences.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-preferences', new UserPreferences(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-preferences');

  service.hooks(hooks);
};
