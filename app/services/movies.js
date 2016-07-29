import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  addMovie(movie) {
    this.get('store').createRecord('movie', movie).save();
  }
});
