const app = require('../../src/app');

describe('\'join__users_and_user_preferences\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-users-and-user-preferences');
    expect(service).toBeTruthy();
  });
});
