var reducer = require('../../src/reducers/GallerySort');

describe('GallerySort', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
