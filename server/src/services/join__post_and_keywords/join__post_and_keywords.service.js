// Initializes the `join__post_and_keywords` service on path `/join-post-and-keywords`
const { JoinPostAndKeywords } = require('./join__post_and_keywords.class');
const createModel = require('../../models/join__post_and_keywords.model');
const hooks = require('./join__post_and_keywords.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-post-and-keywords', new JoinPostAndKeywords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-post-and-keywords');

  service.hooks(hooks);
};
