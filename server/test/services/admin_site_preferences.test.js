const app = require('../../src/app');

describe('\'admin_site_preferences\' service', () => {
  it('registered the service', () => {
    const service = app.service('admin-site-preferences');
    expect(service).toBeTruthy();
  });
});
