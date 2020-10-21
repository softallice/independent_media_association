const { Service } = require('feathers-objection');

exports.JoinTagAndImage = class JoinTagAndImage extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
