// Initializes the `join__users_and_user_type` service on path `/join-users-and-user-type`
const { JoinUsersAndUserType } = require('./join__users_and_user_type.class');
const createModel = require('../../models/join__users_and_user_type.model');
const hooks = require('./join__users_and_user_type.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-users-and-user-type', new JoinUsersAndUserType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-users-and-user-type');

  service.hooks(hooks);
};
