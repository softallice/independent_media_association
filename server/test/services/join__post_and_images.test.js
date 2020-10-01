const app = require('../../src/app');

describe('\'join__post_and_images\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-post-and-images');
    expect(service).toBeTruthy();
  });
});
