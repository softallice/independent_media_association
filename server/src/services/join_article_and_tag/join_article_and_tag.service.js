// Initializes the `join_article_and_tag` service on path `/join-article-and-tag`
const { JoinArticleAndTag } = require('./join_article_and_tag.class');
const createModel = require('../../models/join_article_and_tag.model');
const hooks = require('./join_article_and_tag.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-article-and-tag', new JoinArticleAndTag(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-article-and-tag');

  service.hooks(hooks);
};
