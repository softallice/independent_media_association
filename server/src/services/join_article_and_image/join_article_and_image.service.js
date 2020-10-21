// Initializes the `join_article_and_image` service on path `/join-article-and-image`
const { JoinArticleAndImage } = require('./join_article_and_image.class');
const createModel = require('../../models/join_article_and_image.model');
const hooks = require('./join_article_and_image.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/join-article-and-image', new JoinArticleAndImage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('join-article-and-image');

  service.hooks(hooks);
};
