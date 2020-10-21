// Initializes the `related_article` service on path `/related-article`
const { RelatedArticle } = require('./related_article.class');
const createModel = require('../../models/related_article.model');
const hooks = require('./related_article.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/related-article', new RelatedArticle(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('related-article');

  service.hooks(hooks);
};
