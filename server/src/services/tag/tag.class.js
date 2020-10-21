const { Service } = require('feathers-objection');

exports.Tag = class Tag extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
