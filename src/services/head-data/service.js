import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import HeadData from 'ember-meta/services/head-data';

export default HeadData.extend({
  currentRouteModel: computed('routeName', function() {
    return getOwner(this).lookup(`route:${this.get('routeName')}`).get('currentModel.attributes');
  }),
  content: computed('routeName', function() {
    // content is not on attributes when returned from ember-cli-markdown-resolver
    return getOwner(this).lookup(`route:${this.get('routeName')}`).get('currentModel.content');
  }),
});
