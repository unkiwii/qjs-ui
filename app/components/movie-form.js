import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('cast', []);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    const movie = this.get('movie');
    if (movie) {
      this.set('title', movie.get('title'));
      this.set('director', movie.get('director'));
      this.set('release', movie.get('release'));
      this.set('cast', movie.get('cast'));
    }
  },

  hide() {
    this.setProperties({
      'title': null,
      'director': null,
      'release': null,
      'cast': []
    });
  },

  actions: {
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

    submit() {
      const movie = this.getProperties('title', 'director', 'release', 'cast');
      this.get('onSubmit')(movie);
    }
  }
});
