const { Service } = require('feathers-objection');

exports.SitePreferences = class SitePreferences extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
