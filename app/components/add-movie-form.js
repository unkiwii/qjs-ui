import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  showing: false,

  hide() {
    this.set('showing', false);
  },

  actions: {
    show() {
      this.set('showing', true);
    },

    hide() {
      this.hide();
    },

    addMovie(movie) {
      this.get('store').createRecord('movie', movie).save();
      this.hide();
    }
  }
});
