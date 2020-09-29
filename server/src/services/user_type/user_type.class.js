const { Service } = require('feathers-knex');

exports.UserType = class UserType extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'user_type'
    });
  }
};
