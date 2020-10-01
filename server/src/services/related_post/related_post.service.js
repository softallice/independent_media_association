// Initializes the `related_post` service on path `/related-post`
const { RelatedPost } = require('./related_post.class');
const createModel = require('../../models/related_post.model');
const hooks = require('./related_post.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/related-post', new RelatedPost(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('related-post');

  service.hooks(hooks);
};
