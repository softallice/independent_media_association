// Initializes the `join__post_and_images` service on path `/join-post-and-images`
const { JoinPostAndImages } = require('./join__post_and_images.class');
const createModel = require('../../models/join__post_and_images.model');
const hooks = require('./join__post_and_images.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-post-and-images', new JoinPostAndImages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-post-and-images');

  service.hooks(hooks);
};
