// Initializes the `join__keywords_and_images` service on path `/join-keywords-and-images`
const { JoinKeywordsAndImages } = require('./join__keywords_and_images.class');
const createModel = require('../../models/join__keywords_and_images.model');
const hooks = require('./join__keywords_and_images.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-keywords-and-images', new JoinKeywordsAndImages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-keywords-and-images');

  service.hooks(hooks);
};
