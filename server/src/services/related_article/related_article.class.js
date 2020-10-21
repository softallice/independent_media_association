const { Service } = require('feathers-objection');

exports.RelatedArticle = class RelatedArticle extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
