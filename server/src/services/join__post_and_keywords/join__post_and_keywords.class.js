const { Service } = require('feathers-objection');

exports.JoinPostAndKeywords = class JoinPostAndKeywords extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
