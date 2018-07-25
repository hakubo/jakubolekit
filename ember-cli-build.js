'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    rssFeed: require('./config/rss-feed'),
    prember: {
      urls: buildPremberUrls()
    },
    'ember-prism': {
      theme: 'solarizedlight',
      components: ['markup-templating', 'scss', 'javascript', 'handlebars', 'json'],
      plugins: ['normalize-whitespace', 'line-numbers', 'autolinker']
    }
  });

  app.import('vendor/particles.min.js');

  return app.toTree();
};

function buildPremberUrls() {
  // Build prember urls
  const urls = [
    '/',
    '/contact',
    '/blog/',
  ];

  const { extname } = require('path');
  const walkSync = require('walk-sync');

  const paths = walkSync('src/blog');

  const mdFiles = paths.filter(path => extname(path) === '.md')
    .map((path) => {
      const stripMD = path.replace(/\.md/, '');
      return `/blog/${stripMD}/`;
    });

  mdFiles.forEach((file) => {
    urls.push(file);
  });

  return urls;
}
