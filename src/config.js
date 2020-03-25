//const CLIENT_ID = process.env.CLIENT_ID || '{clientId}';
//const ISSUER = process.env.ISSUER || 'https://{yourOktaDomain}.com/oauth2/default';
//const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    issuer: 'https://dev-918425.okta.com/oauth2/default',               //issuer: ISSUER,
    redirectUri: window.location.origin + '/implicit/callback',         //redirectUri: 'http://localhost:8080/implicit/callback',
    clientId: '0oa4qxbx4idgq7GDK4x6',                                   //clientId: CLIENT_ID,
    pkce: true,
    scopes: ['openid', 'profile', 'email'],
    //disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};