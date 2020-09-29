// Initializes the `image_url` service on path `/image-url`
const { ImageUrl } = require('./image_url.class');
const createModel = require('../../models/image_url.model');
const hooks = require('./image_url.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/image-url', new ImageUrl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('image-url');

  service.hooks(hooks);
};
