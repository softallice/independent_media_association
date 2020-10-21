const { Service } = require('feathers-objection');

exports.JoinArticleAndUser = class JoinArticleAndUser extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
