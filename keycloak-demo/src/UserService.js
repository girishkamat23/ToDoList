import keycloak from './keycloak';

const _kc = keycloak;

const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: 'login-required',
      silentCheckSsoRedirectUri:
        window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    })
    .then((authenticated) => {
      onAuthenticatedCallback();
    });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const getUserProfile = () => _kc.tokenParsed || null;

const isAuthenticated = () => !!_kc.authenticated;

//[admin]
const hasRole = (roles) =>
  roles.length && roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  getToken,
  isLoggedIn,
  getUserProfile,
  isAuthenticated,
  hasRole,
};

export default UserService;
