import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  @service markdownResolver

  model({ path }) {
    const withoutSlash = !path.endsWith('/') ? path : path.slice(0, -1);

    return this.markdownResolver.file('blog', withoutSlash);
  }
}
