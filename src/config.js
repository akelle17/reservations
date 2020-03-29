require('dotenv').config();

var ISSUER = 'https://dev-918425.okta.com/oauth2/default';
var CLIENT_ID = '0oa4qxbx4idgq7GDK4x6';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    issuer: ISSUER,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: CLIENT_ID,
    pkce: true,
    scopes: ['openid', 'profile', 'email'],
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    reservationsUrl: 'http://localhost:8000/api/reservations',
  },
};