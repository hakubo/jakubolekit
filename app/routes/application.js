import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  markdownResolver: service(),
  router: service(),
  fastboot: service(),

  init() {
    this._super(...arguments);

    if (!this.fastboot.isFastBoot) {
      const devCookie = 'jakubolekitdev=true';
      const isDev = document.cookie.indexOf(devCookie) !== -1;

      this.router.on('routeDidChange', ({ to }) => {
        const options = {
          page_path: to.params.path,
        };

        if (isDev) {
          console.log('tracking disabled', options);
        } else {
          gtag('config', 'UA-121804328-1', options);
        }
      });
    }
  },

  model() {
    return this.markdownResolver.tree('blog').then(tree => {
      return tree.files.sortBy('attributes.date').reverse();
    });
  }
})
