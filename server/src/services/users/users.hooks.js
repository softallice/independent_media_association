const { authenticate } = require('@feathersjs/authentication').hooks;

// Adds User Type to user package sent to client
const getUserType = () => {
  return async (context) => {
    console.log('ignore this');
    // console.log(context.result);
    // const userId = context.result.id;
    // const {user_type_id} = await context.app.service('join-users-and-user-type').get({users_id:userId});
    // const {name} = await context.app.service('user-type').get(user_type_id);
    // context.result = {...context.result, user_type: name};
    // return context;
  };
};
// async (context) => {
//   // let input = ;
//   // console.log("input", input);
//   await context.service
//     .find({
//       query: {
//         email: context.data.email,
//       },
//     })
//     .then((data) => {
//       if (!data.data.length) {
//         throw new Error(
//           'Invalid account.'
//         );
//       }
//     });
// },
// const test = () => {
//   async (context) => {
//     console.log(context);
//     return context;
//   };
// };
// authenticate('jwt')
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      async (context) => {
        if(context.params.authStrategies){
          await context.service
            .find({
              query: {
                googleId: context.params.query.googleId,
              },
            })
            .then((data) => {
              if (!data.data.length) {
                throw new Error(
                  'Invalid.'
                );
              }
            });        
        }}],
    get: [
      async (context) => {
        console.log('find');
        return context;
      },
    ],
    create: [authenticate('jwt')],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
