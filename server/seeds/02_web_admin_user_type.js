
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('join__users_and_user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('join__users_and_user_type').insert([
        {id: 1, users_id: process.env.ADMIN_USER_DB_ID_NUMBER, user_type_id:'1'},
      ]);
    });
};
