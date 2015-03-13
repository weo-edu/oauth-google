module.exports = function(opts) {
  var provider = {
    baseUrl: 'https://accounts.google.com/o/oauth2/auth',
    scopeDelimiter: ' ',
    scopePrefix: 'openid',
    scope: ['profile', 'email'],
    display: 'popup',
    popupDefaults: {
      width: 452,
      height: 633
    }
  };

  Object.keys(opts).forEach(function(key) {
    provider[key] = opts[key];
  });

  return function(oauth) {
    oauth.provider = provider;
  };
};