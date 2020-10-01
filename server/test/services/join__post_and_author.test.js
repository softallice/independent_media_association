const app = require('../../src/app');

describe('\'join__post_and_author\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-post-and-author');
    expect(service).toBeTruthy();
  });
});
