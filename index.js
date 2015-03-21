module.exports = function(opts) {
  var provider = {
    baseUrl: 'https://accounts.google.com/o/oauth2/auth',
    scopeDelimiter: ' ',
    scopePrefix: 'openid',
    scope: ['profile', 'email'],
    display: 'popup'
  };

  return Object.keys(opts).reduce(function(memo, key) {
    provider[key] = memo[key];
    return memo;
  }, provider);
};

module.exports.popupDefaults = {
  width: 452,
  height: 633
};

module.exports.scopes = {
  drive: {
    all: 'https://www.googleapis.com/auth/drive',
    appdata: 'https://www.googleapis.com/auth/drive.appdata',
    apps_readonly: 'https://www.googleapis.com/auth/drive.apps.readonly',
    drive_file: 'https://www.googleapis.com/auth/drive.file',
    drive_metadata_readonly: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    drive_readonly: 'https://www.googleapis.com/auth/drive.readonly',
    drive_scripts: 'https://www.googleapis.com/auth/drive.scripts'
  }
};