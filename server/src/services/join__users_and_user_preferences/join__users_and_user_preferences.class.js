const { Service } = require('feathers-objection');

exports.JoinUsersAndUserPreferences = class JoinUsersAndUserPreferences extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
