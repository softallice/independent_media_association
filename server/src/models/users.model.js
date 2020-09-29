/* eslint-disable no-console */

// users-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'users';
  
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id').notNullable();
        table.string("name").notNullable();
        table.string("picture_url");
        table.string('googleId').notNullable();
        table.string('email').notNullable().unique();
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};
