const { Service } = require('feathers-objection');

exports.UserType = class UserType extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
