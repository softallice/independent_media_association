const app = require('../../src/app');

describe('\'keywords\' service', () => {
  it('registered the service', () => {
    const service = app.service('keywords');
    expect(service).toBeTruthy();
  });
});
