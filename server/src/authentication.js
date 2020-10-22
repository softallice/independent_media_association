const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');

const { expressOauth } = require('@feathersjs/authentication-oauth');
const { OAuthStrategy } = require('@feathersjs/authentication-oauth');
class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    console.log("auth");
    const baseData = await super.getEntityData(profile);
    return {
      ...baseData,
      name: profile.name,
      portrait_url:profile.picture,
      email: profile.email
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('google', new GoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
