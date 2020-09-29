const { Service } = require('feathers-knex');

exports.Keywords = class Keywords extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'keywords'
    });
  }
};
