// Initializes the `join_article_and_user` service on path `/join-article-and-user`
const { JoinArticleAndUser } = require('./join_article_and_user.class');
const createModel = require('../../models/join_article_and_user.model');
const hooks = require('./join_article_and_user.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-article-and-user', new JoinArticleAndUser(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-article-and-user');

  service.hooks(hooks);
};
