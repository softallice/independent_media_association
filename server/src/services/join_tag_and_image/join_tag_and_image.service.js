// Initializes the `join_tag_and_image` service on path `/join-tag-and-image`
const { JoinTagAndImage } = require('./join_tag_and_image.class');
const createModel = require('../../models/join_tag_and_image.model');
const hooks = require('./join_tag_and_image.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-tag-and-image', new JoinTagAndImage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-tag-and-image');

  service.hooks(hooks);
};
