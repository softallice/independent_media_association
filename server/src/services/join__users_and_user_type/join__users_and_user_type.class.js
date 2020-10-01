const { Service } = require('feathers-objection');

exports.JoinUsersAndUserType = class JoinUsersAndUserType extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
