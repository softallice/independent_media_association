const app = require('../../src/app');

describe('\'join__keywords_and_images\' service', () => {
  it('registered the service', () => {
    const service = app.service('join-keywords-and-images');
    expect(service).toBeTruthy();
  });
});
