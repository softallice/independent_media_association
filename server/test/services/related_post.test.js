const app = require('../../src/app');

describe('\'related_post\' service', () => {
  it('registered the service', () => {
    const service = app.service('related-post');
    expect(service).toBeTruthy();
  });
});
