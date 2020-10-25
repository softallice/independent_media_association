// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Article extends Model {

  static get tableName() {
    return 'article';
  }

  // static get jsonSchema() {
  //   return {
  //     type: 'object',
  //     required: ['text'],

  //     properties: {
  //       text: { type: 'string' }
  //     }
  //   };
  // }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function () {
  return Article;
};
