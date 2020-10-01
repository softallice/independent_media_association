// Initializes the `join__users_and_user_preferences` service on path `/join-users-and-user-preferences`
const { JoinUsersAndUserPreferences } = require('./join__users_and_user_preferences.class');
const createModel = require('../../models/join__users_and_user_preferences.model');
const hooks = require('./join__users_and_user_preferences.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-users-and-user-preferences', new JoinUsersAndUserPreferences(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-users-and-user-preferences');

  service.hooks(hooks);
};
