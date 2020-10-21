const { authenticate } = require('@feathersjs/authentication').hooks;

// Adds User Type to user package sent to client
const getUserType = () => {
  return async context => {
    // console.log(context.result);
    // const userId = context.result.id;
    // const {user_type_id} = await context.app.service('join-users-and-user-type').get({users_id:userId});
    // const {name} = await context.app.service('user-type').get(user_type_id);
    // context.result = {...context.result, user_type: name};
    // return context; 
  };
}; 

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [  ],
    update: [],
    patch: [],
    remove: []
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
