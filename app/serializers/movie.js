import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    let normalized = null;

    if (Ember.isArray(payload)) {
      normalized = payload.map(normalizeMovie);
    } else {
      normalized = normalizeMovie(payload);
    }

    return { data: normalized };
  },

  serialize(model) {
    const movie = model.record;
    return {
      title: movie.get('title'),
      director: movie.get('director'),
      release: movie.get('release'),
      cast: movie.get('cast').map(removeId)
    };
  }
});

function normalizeMovie(movie) {
  return {
    type: 'movie',
    id: movie._id,
    attributes: {
      title: movie.title,
      director: movie.director,
      release: movie.release,
      cast: movie.cast
    }
  };
}

function removeId(item) {
  const result = {};
  Object.keys(item).forEach((key) => {
    if (key !== "_id") {
      result[key] = item[key];
    }
  });
  return result;
}
