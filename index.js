module.exports = function(clientId) {
  return {
    baseUrl: 'https://accounts.google.com/o/oauth2/auth',
    scopeDelimiter: ' ',
    scopePrefix: 'openid',
    scopes: ['profile', 'email'],
    clientId: clientId,
    display: 'popup',
    popupDefaults: {
      width: 452,
      height: 633
    }
  };
};