const { Service } = require('feathers-objection');

exports.AdminSitePreferences = class AdminSitePreferences extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
