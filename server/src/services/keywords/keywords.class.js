const { Service } = require('feathers-objection');

exports.Keywords = class Keywords extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
