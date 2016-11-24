var reducer = require('../../src/reducers/ActiveGalleryItem');

describe('ActiveGalleryItem', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
