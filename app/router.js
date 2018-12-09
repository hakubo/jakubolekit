import EmberRouter from '@ember/routing/router';
import RouterScroll from 'ember-router-scroll';
import config from "./config/environment";

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog', {path: '/'});
  this.route('post', {path: '/*path/'});
});

export default Router;
