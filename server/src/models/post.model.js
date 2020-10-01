// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Post extends Model {

  static get tableName() {
    return 'post';
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

  // db.schema.hasTable('post').then(exists => {
  //   if (!exists) {
  //     db.schema.createTable('post', table => {
  //       table.increments('id');
  //       table.string('text');
  //       table.timestamp('createdAt');
  //       table.timestamp('updatedAt');
  //     })
  //       .then(() => console.log('Created post table')) // eslint-disable-line no-console
  //       .catch(e => console.error('Error creating post table', e)); // eslint-disable-line no-console
  //   }
  // })
  //   .catch(e => console.error('Error creating post table', e)); // eslint-disable-line no-console

  return Post;
};
