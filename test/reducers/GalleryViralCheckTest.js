var reducer = require('../../src/reducers/GalleryViralCheck');

describe('GalleryViralCheck', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
