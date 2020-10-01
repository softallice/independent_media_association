// Initializes the `join__post_and_author` service on path `/join-post-and-author`
const { JoinPostAndAuthor } = require('./join__post_and_author.class');
const createModel = require('../../models/join__post_and_author.model');
const hooks = require('./join__post_and_author.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-post-and-author', new JoinPostAndAuthor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-post-and-author');

  service.hooks(hooks);
};
