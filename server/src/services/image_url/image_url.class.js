const { Service } = require('feathers-objection');

exports.ImageUrl = class ImageUrl extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
