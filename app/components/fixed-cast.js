import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove(cast) {
      this.get('onRemove')(cast);
    }
  }
});
