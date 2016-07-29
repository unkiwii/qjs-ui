import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  editing: false,

  editIcon: Ember.computed('editing', function() {
    if (this.get('editing')) {
      return 'close';
    }
    return 'pencil';
  }),

  actions: {
    toggleEdit() {
      this.set('editing', !this.get('editing'));
    },

    edit(newData) {
      const movie = this.get('store').peekRecord('movie', this.get('id'));
      if (movie) {
        movie.setProperties(newData);
        movie.save();
        this.set('editing', false);
      }
    },

    remove(movie) {
      movie.destroyRecord();
    }
  }
});
