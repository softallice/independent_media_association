const app = require('../../src/app');

describe('\'join__users_and_user_type\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-users-and-user-type');
    expect(service).toBeTruthy();
  });
});
