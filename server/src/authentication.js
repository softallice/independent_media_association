const {
  AuthenticationService,
  JWTStrategy,
} = require('@feathersjs/authentication');

const { expressOauth } = require('@feathersjs/authentication-oauth');
const { OAuthStrategy } = require('@feathersjs/authentication-oauth');
const { GeneralError } = require('@feathersjs/errors');

class GoogleStrategy extends OAuthStrategy {
  async getEntityQuery(query){
    return{
      email:query.email,
      active:true
    };
  }
  async findEntity(username, params){
    const entity = await super.findEntity(username, params);
    if (!entity) {
      throw new GeneralError('Invalid.');
    }
    return entity;
  }
  async getEntityData(profile) {
    const baseData = await super.getEntityData(profile);
    return {
      ...baseData,
      name: profile.name,
      portrait_url:profile.picture,
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);
  authentication.register('jwt', new JWTStrategy());
  authentication.register('google', new GoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
