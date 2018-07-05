/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'prod') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here

    ENV['simply-ssh'] = {
      connection: {
        // parameter hash accepted by SSH2, see https://github.com/mscdex/ssh2 for details
        host: process.env.SSH_HOST,
        port: process.env.SSH_PORT,
        username: process.env.SSH_USER,
        password: process.env.PASS
      },
      dir: process.env.DEPLOY_FOLDER
    }

    ENV['gzip'] = {
      filePattern: ''
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
