const { Service } = require('feathers-objection');

exports.JoinPostAndImages = class JoinPostAndImages extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
