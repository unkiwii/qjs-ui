import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    return {
      data: payload.map(normalizeMovie)
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
