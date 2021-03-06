import Ember from 'ember';
import Route from '@ember/routing/route';

const { RSVP, set } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      def_images: this.get('store').findAll('def-image')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'defImages', model.def_images);
  }
});
