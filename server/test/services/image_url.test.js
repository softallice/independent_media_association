const app = require('../../src/app');

describe('\'image_url\' service', () => {
  it('registered the service', () => {
    const service = app.service('image-url');
    expect(service).toBeTruthy();
  });
});
