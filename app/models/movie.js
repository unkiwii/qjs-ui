import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr('string'),
  release: DS.attr('number'),
  cast: DS.attr()
});
