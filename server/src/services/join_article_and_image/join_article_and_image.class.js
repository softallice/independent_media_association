const { Service } = require('feathers-objection');

exports.JoinArticleAndImage = class JoinArticleAndImage extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
