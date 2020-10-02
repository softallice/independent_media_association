
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_type').insert([
        {id: 1, name: 'admin'},
        {id: 2, name: 'user'},
        {id: 3, name: 'author'}
      ]);
    });
};
