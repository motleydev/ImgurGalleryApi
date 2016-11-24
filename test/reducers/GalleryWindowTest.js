var reducer = require('../../src/reducers/GalleryWindow');

describe('GalleryWindow', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
