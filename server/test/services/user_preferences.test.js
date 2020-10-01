const app = require('../../src/app');

describe('\'user_preferences\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-preferences');
    expect(service).toBeTruthy();
  });
});
