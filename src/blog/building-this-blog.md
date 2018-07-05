---
author: Jakub Olek
categories:
  - ember
  - tech
date: '2018-07-05'
slug: building-this-blog
title: How I built this blog
description: Overview of the tech behind this simple site
---

I'd like to share how this blog/page is setup and how you could built something like this yourself

# This page is built on top of Ember
## but why
this is what I know and am comfortable with
it's fast and easy to build with
etc

tech behind it
- Ember
- ember deploy
- prember

```scss
.handcrafted {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0,0,0,.4)
}
```

```js
/**
 * http://www.wp.pl
 * */
    let app = new EmberApp(defaults, {
  rssFeed: require('./config/rss-feed'),
  vendorFiles: {
    'jquery.js': null
    },
  prember: {
   urls: buildPremberUrls()
  },
```

Things on the cutting edge
- angle brackets invocation
- rehydration


See you in other posts
