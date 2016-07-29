import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  showing: false,

  init() {
    this._super(...arguments);
    this.set('cast', []);
  },

  actions: {
    show() {
      this.set('showing', true);
    },

    hide() {
      this.set('showing', false);
    },

    addCast(cast) {
      this.get('cast').push(cast);
      this.notifyPropertyChange('cast');
    },

    removeCast(cast) {
      const index = this.get('cast').indexOf(cast);
      if (index !== -1) {
        this.get('cast').splice(index, 1);
        this.notifyPropertyChange('cast');
      }
    },

    addMovie() {
      const movie = this.getProperties('title', 'director', 'release', 'cast');
      console.log(`addMovie: ${JSON.stringify(movie)}`);
      this.get('store').createRecord('movie', movie).save();
      this.setProperties({
        'title': null,
        'director': null,
        'release': null,
        'cast': []
      });
      this.set('showing', false);
    }
  }
});
