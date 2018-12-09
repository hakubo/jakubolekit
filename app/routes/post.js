import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import Prism from 'prismjs';

export default Route.extend({
  markdownResolver: service(),
  fastboot: service(),

  model({ path }) {
    const withoutSlash = !path.endsWith('/') ? path : path.slice(0, -1);

    return this.markdownResolver.file('blog', withoutSlash);
  },

  activate() {
    this._super(...arguments);

    if (!this.fastboot.isFastBoot) {
      run.scheduleOnce('afterRender', Prism.highlightAll);
    }
  },
});
