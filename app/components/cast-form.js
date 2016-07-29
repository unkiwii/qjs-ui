import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    add() {
      const cast = this.getProperties('name', 'role')
      if (!cast.name) {
        this.$('#name').focus();
      } else if (!cast.role) {
        this.$('#role').focus();
      } else {
        this.get('onAdd')(cast);
        this.setProperties({'name': null, 'role': null});
      }
    }
  }
});
