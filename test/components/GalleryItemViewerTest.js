import React from 'react';
import { shallow } from 'enzyme';
import GalleryItemViewer from 'components//GalleryItemViewer.js';

describe('<GalleryItemViewer />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<GalleryItemViewer />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "galleryitemviewer-component"', () => {
      expect(component.hasClass('galleryitemviewer-component')).to.equal(true);
    });
  });
});
