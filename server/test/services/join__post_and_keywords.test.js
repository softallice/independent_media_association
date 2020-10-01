const app = require('../../src/app');

describe('\'join__post_and_keywords\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-post-and-keywords');
    expect(service).toBeTruthy();
  });
});
