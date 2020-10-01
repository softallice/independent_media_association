const { Service } = require('feathers-objection');

exports.JoinKeywordsAndImages = class JoinKeywordsAndImages extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
