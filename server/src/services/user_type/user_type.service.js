// Initializes the `user_type` service on path `/user-type`
const { UserType } = require('./user_type.class');
const createModel = require('../../models/user_type.model');
const hooks = require('./user_type.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-type', new UserType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-type');

  service.hooks(hooks);
};
