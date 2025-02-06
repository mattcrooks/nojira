export const authConfig = {
  clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23lixWN2GuDYhOlsRY',
  redirectUri: window.location.origin, // typically your app's root URL
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'http://localhost:3000/auth/github/access_token',
  scopes: ['read:user', 'read:org', 'user:email'],
  logoutEndpoint: 'https://github.com/login/oauth/logout',
  logoutRedirect: 'http://localhost:3000',
  preLogin: () =>
    localStorage.setItem('preLoginPath', window.location.pathname),
  postLogin: () =>
    window.location.replace(localStorage.getItem('preLoginPath') || ''),
  decodeToken: false,
  autoLogin: false,
};
