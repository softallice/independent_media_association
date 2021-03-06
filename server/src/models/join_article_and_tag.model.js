// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class JoinArticleAndTag extends Model {

  static get tableName() {
    return 'join_article_and_tag';
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

module.exports = function () {
  return JoinArticleAndTag;
};
