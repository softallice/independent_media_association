const { authenticate } = require('@feathersjs/authentication').hooks;
//const knex = require('knex');


const getUserType = () => {
  return async context => {
    const userId = context.result.id
    const {user_type_id} = await context.app.service('join-users-and-user-type').get({users_id:userId})
    const {name} = await context.app.service('user-type').get(user_type_id)
    context.result = {...context.result, user_type: name}
    return context; 
  }
} 

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [ authenticate('jwt')],
    create: [  ],
    update: [  authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ ],
    find: [],
    get: [getUserType()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
