const { Service } = require('feathers-objection');

exports.UserPreferences = class UserPreferences extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
