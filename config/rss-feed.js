'use strict';

let siteURL = 'http://example.com';

module.exports = {

  feed: {
    title: 'Jakub Olek\'s blog',

    description: 'Short description about your blog within 320 words',

    site_url: siteURL,

    // Icon of your site
    image_url: `${siteURL}/icon.png`,

    managingEditor: 'jakub@olek.it (Jakub Olek)',

    // Life achievement unlocked!
    webMaster: 'jakub@olek.it (Jakub Olek)',

    copyright: '2018 Jakub Olek',

    // language: 'de'
  },

  //Glob style patterns (https://github.com/isaacs/node-glob#glob-primer)
  articles: './app/blog/*.md',

  /** Actual URL of individual blog post */
  urlForPost(postMeta) {
    return `${siteURL}/blog/${postMeta.slug}`;
  }

};
