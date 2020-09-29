const { Service } = require('feathers-knex');

exports.Author = class Author extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'author'
    });
  }
};
