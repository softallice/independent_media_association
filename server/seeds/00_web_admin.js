exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          createdAt: knex.fn.now(),
          updatedAt: knex.fn.now(),
          name: process.env.WEB_ADMIN_NAME,
          email: process.env.WEB_ADMIN_EMAIL,
          portrait_url: process.env.WEB_ADMIN_PORTRAIT_URL,
        },
      ]);
    });
};
