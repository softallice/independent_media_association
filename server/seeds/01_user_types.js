
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_type').insert([
        {id: 1, name: 'admin'},
        {id: 2, name: 'editor'},
        {id: 3, name: 'author'},
        {id: 4, name: 'guest_author'}
      ]);
    });
};
