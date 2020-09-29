const { Service } = require('feathers-knex');

exports.ImageUrl = class ImageUrl extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'image_url'
    });
  }
};
