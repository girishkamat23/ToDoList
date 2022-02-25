import Keycloak from 'keycloak-js';

let config = {
  realm: 'master',
  url: 'http://localhost:8080/auth',
  clientId: 'demo-app',
};
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(config);

export default keycloak;

// import Keycloak from 'keycloak-js';

// let config = {
//   realm: 'master',
//   'auth-server-url': 'http://localhost:8080/auth/',
//   'ssl-required': 'external',
//   resource: 'demo-app',
//   'verify-token-audience': true,
//   'confidential-port': 0,
//   'policy-enforcer': {},
//   clientId: 'demo-app',
//   onLoad: 'login-required',
// };
// // Setup Keycloak instance as needed
// // Pass initialization options as required or leave blank to load from 'keycloak.json'
// const keycloak = new Keycloak(config);

// export default keycloak;
