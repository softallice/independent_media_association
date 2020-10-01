const { Service } = require('feathers-objection');

exports.JoinPostAndAuthor = class JoinPostAndAuthor extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
