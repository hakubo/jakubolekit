'use strict';

module.exports = function (environment) {
  let ENV = {
    'ember-resolver': {
      features: {
      }
    },
    modulePrefix: 'jakubolekit',
    environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
      analytics: {
        integrations: [
          {
            name: 'GoogleAnalytics',
            config: {
              id: 'UA-121804328-1',
              remarketing: true,
              ecommerce: true,
              enhancedEcommerce: false,
              set: {
                anonymizeIp: true
              }
            }
          }
        ]
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-cli-markdown-resolver'] = {
    folders: {
      blog: 'app/blog'
    }
  };

  ENV['ember-meta'] = {
    description: 'Notes and scribbles by Jakub Olek',
    imgSrc: 'http://i.imgur.com/KVqNjgO.png',
    twitterUsername: 'JakubOlek',
    siteName: 'Jakub Olek\'s personal blog',
    title: 'Notes and scribbles',
    url: 'http://jakub.olek.it/'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
