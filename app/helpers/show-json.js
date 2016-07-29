import Ember from 'ember';

export function showJson(obj) {
  return JSON.stringify(obj);
}

export default Ember.Helper.helper(showJson);
