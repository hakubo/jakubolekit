import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

export default class BlogRoute extends Route {
  @service markdownResolver

  model() {
    return this.markdownResolver.tree('blog').then((tree) => {
      return tree.files.sortBy('attributes.date').reverse();
    });
  }
}
