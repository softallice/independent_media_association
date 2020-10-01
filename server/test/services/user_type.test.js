const app = require('../../src/app');

describe('\'user_type\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-type');
    expect(service).toBeTruthy();
  });
});
