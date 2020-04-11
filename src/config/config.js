require('dotenv').config();

var ISSUER = process.env.REACT_APP_ISSUER;
var CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.REACT_APP_OKTA_TESTING_DISABLEHTTPSCHECK || false;

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
    reservationsUrl: 'http://localhost:8000/api/v1/reservations',
    assetsUrl: 'http://localhost:8000/api/v1/assets',
  },
};