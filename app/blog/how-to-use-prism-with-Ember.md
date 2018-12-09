---
author: Jakub Olek
categories:
  - ember
  - tech
date: '2018-12-08'
slug: how-to-use-prism-with-Ember
title: How to use Prismjs with Ember
description: A quick guide on how to import external library
---

This will be a very quick guide on how to use an external library installed via npm/yarn. I won't go into detail of what [Prism](https://prismjs.com/) is. I'll just use it as an example to show that Ember can easily cooperate with third party libraries.

1. install Prism
```sh
npm install prismjs
```

2. install [ember-auto-import](https://github.com/ef4/ember-auto-import)
```sh
ember install ember-auto-import
```
This addon is a real gem 💎. IMO It should be a part of Ember CLI.

3. Import Prism somewhere in your app. For this blog I import it in Post route, so I can rerun highlighting whenever you visit a post page. Like so:

```js
...
import Prism from 'prismjs';

export default class PostRoute extends Route {
  ...

  @action
  activate() {
    this._super(...arguments);

    if (!this.fastboot.isFastBoot) {
      // Run it on every activation of a route
      // But after render - so Prism has access to all code elements
      run.scheduleOnce('afterRender', Prism.highlightAll);
    }
  }
}
```

Notice that I do not run Prism on FastBoot. But the fact is that Prism can be run in node, but that would require a bit more setup, if you're courius you can find how to set it up on Prism's page.

4. Profit!

Have a good one! 😼
