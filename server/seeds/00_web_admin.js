exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: process.env.ADMIN_USER_DB_ID_NUMBER,
          createdAt: knex.fn.now(),
          updatedAt: knex.fn.now(),
          email: process.env.WEB_ADMIN_EMAIL,
          active:true,
          title:'Web Administrator'
        },
      ]);
    });
};
