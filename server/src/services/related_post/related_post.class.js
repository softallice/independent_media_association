const { Service } = require('feathers-objection');

exports.RelatedPost = class RelatedPost extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
