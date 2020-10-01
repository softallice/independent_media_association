// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class UserType extends Model {

  static get tableName() {
    return 'user_type';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],

      properties: {
        text: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function (app) {
  // const db = app.get('knex');

  // db.schema.hasTable('user_type').then(exists => {
  //   if (!exists) {
  //     db.schema.createTable('user_type', table => {
  //       table.increments('id');
  //       table.string('text');
  //       table.timestamp('createdAt');
  //       table.timestamp('updatedAt');
  //     })
  //       .then(() => console.log('Created user_type table')) // eslint-disable-line no-console
  //       .catch(e => console.error('Error creating user_type table', e)); // eslint-disable-line no-console
  //   }
  // })
  //   .catch(e => console.error('Error creating user_type table', e)); // eslint-disable-line no-console

  return UserType;
};
