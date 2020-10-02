
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('join__users_and_user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('join__users_and_user_type').insert([
        {id: 1, users_id: '1', user_type_id:'1'},
      ]);
    });
};
