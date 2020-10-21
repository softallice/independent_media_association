const { Service } = require('feathers-objection');

exports.JoinArticleAndTag = class JoinArticleAndTag extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
