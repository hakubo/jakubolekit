'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const environment = EmberApp.env();
  const IS_PROD = environment === 'production';
  const IS_TEST = environment === 'test';

  let app = new EmberApp(defaults, {
    hinting: IS_TEST,
    tests: IS_TEST,
    babel: {
      loose: true
    },
    'ember-cli-babel': {
      //includePolyfill: IS_PROD,
    },
    autoprefixer: {
      sourcemap: false,
    },
    sourcemaps: {
      enabled: true, // open issue for [MU]
    },
    rssFeed: require('./config/rss-feed'),
    prember: {
      urls: buildPremberUrls(),
    },
    vendor: {
      'ember-cli-shims': null,
      'jquery': null
    }
  });

  return app.toTree();
};

function buildPremberUrls() {
  // Build prember urls
  const urls = ['/'];

  const { extname } = require('path');
  const walkSync = require('walk-sync');

  const paths = walkSync('app/blog');

  const mdFiles = paths
    .filter(path => extname(path) === '.md')
    .map(path => {
      const stripMD = path.replace(/\.md/, '');
      return `/${stripMD}/`;
    });

  mdFiles.forEach(file => {
    urls.push(file);
  });

  return urls;
}
